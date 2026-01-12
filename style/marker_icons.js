const defaultIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="background-color: #3388ff; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

// Создаем иконку для выбранного состояния (красная)
const selectedIcon = L.divIcon({
  className: "custom-marker selected",
  html: `<div style="background-color: #ff3333; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

export { selectedIcon, defaultIcon };
