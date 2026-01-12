import map from "../map.js";
import stations from "../data/stations.js";
import { defaultIcon, selectedIcon } from "../style/marker_icons.js";
import new_routes from "../data/routes.js";

const options = [];
for (const route_name of Object.keys(new_routes)) {
  options.push(route_name);
}
const select = document.getElementById("route_number");
const select_direction = document.getElementById("route_direction");
const show_stations = document.getElementById("show_stations");

options.forEach((option) => {
  const option_block = document.createElement("option");
  option_block.value = `route_${option}`;
  option_block.text = option;
  select.appendChild(option_block);
});

function showDirectionsInSelect(route_object) {
  const directions = Object.keys(route_object);
  select_direction.length = 0;
  directions.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.text = `Маршрут: ${key[1]}`;
    select_direction.appendChild(option);
  });
}

let currentPolyline = null;
let selectedRoute = null;
let currentRouteStations = [];

select.addEventListener("change", function (e) {
  selectedRoute = e.target.value.split("_")[[1]];
  showDirectionsInSelect(new_routes[selectedRoute]);
  fetchChangesFromUser();
});

select_direction.addEventListener("change", function (e) {
  fetchChangesFromUser();
});

let markers_on_map = [];

show_stations.addEventListener("change", (e) => {
  if (show_stations.checked) {
    console.log("Станции теперь отображаются");
    for (const station of stations["stations"]) {
      const marker = L.marker(station.coords, {
        icon: defaultIcon,
      }).addTo(map);
      marker.on("click", () => {
        let myStation = null;
        for (const currentStation of stations["stations"]) {
          if (
            currentStation.coords.lat === marker.getLatLng().lat &&
            currentStation.coords.lng === marker.getLatLng().lng
          ) {
            myStation = currentStation;
            break;
          }
        }
        if (!currentRouteStations.includes(myStation)) {
          currentRouteStations.push(myStation);
          marker.setIcon(selectedIcon);
          console.log(currentRouteStations);
        } else {
          console.log("Данная остановка уже есть в массиве");
        }
      });
      marker.on("dblclick", () => {
        let myStation = null;
        for (const currentStation of stations["stations"]) {
          if (
            currentStation.coords.lat === marker.getLatLng().lat &&
            currentStation.coords.lng === marker.getLatLng().lng
          ) {
            myStation = currentStation;
            break;
          }
        }
        if (currentRouteStations.includes(myStation)) {
          currentRouteStations.splice(
            currentRouteStations.indexOf(myStation),
            1
          );
          marker.setIcon(defaultIcon);
          console.log(currentRouteStations);
        } else {
          console.log("Данной остановки нет в массиве");
        }
      });
      marker.bindPopup(`<b>${station.name}</b>`);
      markers_on_map.push(marker);
    }
  } else {
    for (const marker of markers_on_map) {
      map.removeLayer(marker);
      markers_on_map = [];
    }
    console.log("Станции больше не отображаются");
  }
});

function fetchChangesFromUser() {
  const routeDirection = select_direction.value;
  console.log(`Маршрут: ${selectedRoute}, Направление: ${routeDirection}`);

  const myRouteTrajectory =
    new_routes[selectedRoute][routeDirection]["trajectory"];
  refreshPolyline(myRouteTrajectory);
}

function refreshPolyline(new_trajectory) {
  // Удаляем предыдущую полилинию
  if (currentPolyline) {
    map.removeLayer(currentPolyline);
    currentPolyline = null;
  }

  // Если выбран маршрут - рисуем его
  if (new_trajectory) {
    currentPolyline = L.polyline(new_trajectory, {
      color: "blue",
      weight: 4,
      opacity: 0.7,
    }).addTo(map);

    // Подгоняем карту под маршрут
    map.fitBounds(currentPolyline.getBounds());
  }
}
