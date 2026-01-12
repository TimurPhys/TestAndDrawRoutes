import map from "../map.js";
import new_routes from "../data/routes.js";

// ======================
// Состояние
// ======================

let isDrawMode = false;
let isEditMode = false;
let selectedDrawMode = "automatic";

let waypoints = [];
let markers = [];
let editedPoints = []; // обновлённые точки после редактирования
let basePoints = []; // исходные точки маршрута
let chosenInsertIndex = null;

let routingControl = null;
let polyline = null;

// UI элементы
const infoTextEl = document.querySelector(".info-message");
const drawBtn = document.querySelector(".draw-btn");
const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");
const drawModeSelect = document.querySelector("#draw-mode-select");

// ======================
// Утилиты
// ======================

function areCoordinatesEqual(a, b, precision = 0.00005) {
  return (
    Math.abs(a.lat - b.lat) < precision && Math.abs(a.lng - b.lng) < precision
  );
}

function setInfo(message, color) {
  infoTextEl.textContent = message;
  infoTextEl.style.color = color;
}

function clearMarkers() {
  for (const m of markers) {
    map.removeLayer(m);
  }
  markers = [];
}

function removePolyline() {
  if (polyline) {
    map.removeLayer(polyline);
    polyline = null;
  }
}

function removeRoutingControl() {
  if (routingControl) {
    map.removeControl(routingControl);
    routingControl = null;
  }
}

/**
 * Создаёт polyline на карте по списку точек (lat,lng)
 * и возвращает саму polyline.
 */
function createEditablePolyline(pointsArray) {
  return L.polyline(pointsArray, {
    color: "red",
    weight: 4,
    opacity: 0.7,
    smoothFactor: 1,
  }).addTo(map);
}

/**
 * Перерисовывает polyline по текущим маркерам.
 * Возвращает массив координат.
 */
function updatePolylineFromMarkers(currentMarkers) {
  const pts = currentMarkers.map((m) => m.getLatLng());
  if (polyline) {
    polyline.setLatLngs(pts);
  }
  return pts;
}

/**
 * Логика клика по маркеру.
 * - В обычном режиме клика: удаляем маркер.
 * - В editMode и без выбранного индекса: выбираем точку,
 *   после которой будут добавляться новые.
 */
function attachMarkerHandlers(marker) {
  marker.on("click", function () {
    if (!isEditMode) {
      // режим НЕ редактирования:
      // просто удалить маркер
      map.removeLayer(marker);

      const idx = markers.indexOf(marker);
      if (idx !== -1) {
        markers.splice(idx, 1);
      }

      editedPoints = updatePolylineFromMarkers(markers);
    } else if (isEditMode && chosenInsertIndex === null) {
      // режим редактирования:
      // одиночный клик = выбрать точку,
      // после которой будем вставлять новую
      chosenInsertIndex = markers.indexOf(marker);
      console.log("Выбран маркер с индексом:", chosenInsertIndex);
      setInfo(
        `Выбрана точка №${chosenInsertIndex}. Теперь кликните по карте, чтобы вставить новую после неё`,
        "blue"
      );
    }
  });

  // двойной клик по маркеру
  marker.on("dblclick", function (e) {
    // важно: чтобы dblclick не триггерил клик по карте (добавление новой точки)
    e.originalEvent.stopPropagation();

    if (isEditMode) {
      // удалить маркер
      const idx = markers.indexOf(marker);
      if (idx !== -1) {
        map.removeLayer(marker);
        markers.splice(idx, 1);
      }

      // сбросить выбранный индекс, если удалили ту точку
      if (chosenInsertIndex === idx) {
        chosenInsertIndex = null;
      } else if (chosenInsertIndex > idx) {
        // если удалили точку ДО выбранного индекса, индекс сдвигается
        chosenInsertIndex -= 1;
      }

      // обновить линию
      editedPoints = updatePolylineFromMarkers(markers);

      console.log("Маркер удалён двойным кликом. Новые точки:", editedPoints);
      setInfo("Точка удалена", "red");
    }
  });
}

/**
 * Создаёт маркеры на карте по списку координат
 * и навешивает обработчики.
 */
function spawnMarkersForPoints(pointsArray) {
  clearMarkers();
  for (const pt of pointsArray) {
    const marker = L.marker(pt).addTo(map);
    markers.push(marker);
  }
  markers.forEach(attachMarkerHandlers);
}

/**
 * Прячет стандартный контейнер управления маршрутом
 * (leaflet-routing-machine), чтобы не мешал в UI.
 */
function hideRoutingControlUI() {
  const routingContainer = document.querySelector(".leaflet-control-container");
  if (routingContainer) {
    routingContainer.style.display = "none";
  }
}

// ======================
// Обработчики карты
// ======================

// Клик по карте в режиме рисования маршрута (выбор/удаление waypoint'ов)
map.on("click", function (e) {
  if (!isDrawMode) return;

  const latlng = L.latLng(e.latlng.lat, e.latlng.lng);

  // если точка уже есть — удаляем её (кроме случая когда их <=2)
  const existingIndex = waypoints.findIndex((wp) =>
    areCoordinatesEqual(wp, latlng)
  );

  if (existingIndex !== -1) {
    if (waypoints.length <= 2) {
      waypoints = [];
      console.log("Массив очищен!");
    } else {
      waypoints.splice(existingIndex, 1);
      console.log("Точка была удалена");
    }
  } else {
    waypoints.push(latlng);
  }

  if (selectedDrawMode === "automatic") {
    // Перестроить routingControl по новым waypoints
    removeRoutingControl();
    if (waypoints.length >= 2) {
      routingControl = L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "blue", opacity: 0.6, weight: 4 }],
        },
        show: false,
        router: L.Routing.osrmv1({
          serviceUrl: "https://router.project-osrm.org/route/v1",
        }),
      }).addTo(map);
    }

    hideRoutingControlUI();
  } else if (selectedDrawMode === "manual") {
    if (!polyline) {
      spawnMarkersForPoints(waypoints);
      polyline = createEditablePolyline(waypoints);
    } else {
      polyline.setLatLngs(waypoints);
    }
  }
});

// Клик по карте в режиме редактирования (добавление новой точки между маркерами)
map.on("click", (e) => {
  if (!isEditMode) return;

  if (chosenInsertIndex === null) {
    console.log("Выберите точку, после которой будут добавляться маркеры");
    setInfo(
      "Выберите точку, после которой будут добавляться маркеры",
      "orange"
    );
    return;
  }

  console.log("Добавлен маркер");
  setInfo("Добавлен маркер", "blue");

  // индекс сдвигаем, чтобы вставлять ПОСЛЕ выбранного
  chosenInsertIndex += 1;

  const newMarker = L.marker(e.latlng).addTo(map);

  markers.splice(chosenInsertIndex, 0, newMarker);

  // Обновляем полилинию
  editedPoints = updatePolylineFromMarkers(markers);

  // навесить обработчики на новый маркер
  attachMarkerHandlers(newMarker);
});

// ======================
// Кнопки (режимы)
// ======================

// Кнопка "Рисовать маршрут"
drawBtn.addEventListener("click", () => {
  // переключаем режим рисования
  selectedDrawMode = drawModeSelect.value;

  if (!isDrawMode) {
    drawModeSelect.disabled = true;
  } else {
    drawModeSelect.disabled = false;
  }
  if (routingControl !== null || !waypoints) {
    drawModeSelect.disabled = true;
  }

  isDrawMode = !isDrawMode;

  // Блокируем/разблокируем остальные кнопки
  saveBtn.disabled = !saveBtn.disabled;
  editBtn.disabled = !editBtn.disabled;

  if (isDrawMode) {
    setInfo("Включен режим рисования маршрута", "green");
  } else {
    setInfo("Вы вышли из режима рисования", "red");
  }
});

// Кнопка "Редактировать маршрут"
editBtn.addEventListener("click", () => {
  try {
    // 1. Берём координаты маршрута из routingControl
    // routingControl._routes[0].coordinates → массив {lat, lng}
    if (!isEditMode) {
      if (
        (!routingControl && selectedDrawMode === "automatic") ||
        (!waypoints && selectedDrawMode === "manual")
      ) {
        throw new Error("Маршрут не построен. Сначала нарисуйте его.");
      }
      clearMarkers(); // убрать старые маркеры с карты
      removePolyline();
      if (selectedDrawMode === "automatic") {
        basePoints = routingControl._routes[0].coordinates;
        // 2. Чистим старые штуки перед созданием новой версии
        // убрать старую polyline с карты
        removeRoutingControl(); // убрать routing control UI с карты, чтобы не мешал в режиме редактирования

        // 3. Создаём новую polyline на основе актуальных точек из маршрута
        polyline = createEditablePolyline(basePoints);

        // 4. Создаём маркеры по каждой точке polyline
        spawnMarkersForPoints(basePoints);
      } else if (selectedDrawMode === "manual") {
        polyline = createEditablePolyline(waypoints);

        // 4. Создаём маркеры по каждой точке polyline
        spawnMarkersForPoints(waypoints);
      }
    }

    // 5. Включаем / выключаем сам режим редактирования
    saveBtn.disabled = !saveBtn.disabled;
    drawBtn.disabled = !drawBtn.disabled;
    drawModeSelect.disabled = false;
    isEditMode = !isEditMode;

    if (routingControl !== null || !waypoints || isEditMode) {
      drawModeSelect.disabled = true;
    }

    if (isEditMode) {
      editedPoints = [];
      chosenInsertIndex = null;
      setInfo("Включен режим редактирования маршрута", "blue");
    } else {
      setInfo("Вы вышли из режима редактирования", "red");
    }
  } catch (error) {
    console.error("Ошибка запроса, повторите еще раз!", error);
    setInfo("Ошибка запроса, повторите еще раз!", "red");
  }
});

// Кнопка "Сохранить"
saveBtn.addEventListener("click", () => {
  if (!editedPoints || editedPoints.length === 0) {
    // если ничего не редактировали, то считаем базовые точки итогом
    editedPoints = updatePolylineFromMarkers(markers);
  }

  const addedCount = editedPoints.length - basePoints.length;

  console.log(`Добавлено ${addedCount} точек`);
  console.log("Конечный массив после исправления:");
  console.log(editedPoints);

  setInfo("Маршрут был успешно сохранен", "green");
});

export { setInfo };
