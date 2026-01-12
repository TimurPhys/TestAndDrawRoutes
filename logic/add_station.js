import map from "../map.js";
import { setInfo } from "./route_edit.js";
import new_routes from "../data/routes.js";

class Station {
  constructor(name, coords, trans_attend) {
    this.name = name;
    this.coords = coords;
    this.trans_attend = trans_attend;
  }
}

const customIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const options = [];
for (const route_name of Object.keys(new_routes)) {
  options.push(route_name);
}

const container = document.querySelector(".checkbox-container");
const saveBtn = document.querySelector(".save-station");
const input_station = document.getElementById("station_name");
let stations = [];

// 1. Генерируем чекбоксы из массива
options.forEach((item, index) => {
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = item;
  checkbox.id = `opt-${index}`;

  label.appendChild(checkbox);
  label.append(item);

  container.appendChild(label);
});

let marker = null;
map.on("click", (e) => {
  const latlng = e.latlng;
  if (marker !== null) {
    map.removeLayer(marker);
  }
  marker = L.marker(latlng).addTo(map);
});

saveBtn.addEventListener("click", () => {
  const checkedValues = Array.from(
    container.querySelectorAll("input[type=checkbox]:checked")
  ).map((cb) => cb.value);

  if (checkedValues.length === 0) {
    setInfo("Выберите посещаемые траспорты", "red");
    return;
  } else if (!input_station.value) {
    setInfo("Введите название остановки", "red");
    return;
  } else if (marker === null) {
    setInfo("Укажите местоположение остановки", "red");
    return;
  }

  const new_station = new Station(
    input_station.value,
    marker.getLatLng(),
    checkedValues
  );
  input_station.value = "";
  map.removeLayer(marker);
  marker = null;
  setInfo("Остановка успешно сохранена!", "green");
  stations.push(new_station);

  if (stations) {
    stations.forEach((station) => {
      const new_marker = L.marker(station.coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<b>Название:</b> ${station.name}<br>
             <b>Транспорты:</b> ${checkedValues.join(", ")}`
        );
    });
  }

  console.log(stations);
});
