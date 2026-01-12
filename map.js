const map = L.map("map").setView([56.49, 21.02], 15);

L.tileLayer(
  "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token={accessToken}",
  {
    attribution:
      '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 5,
    maxZoom: 20,
    accessToken:
      "dxV97nF1RGn9bsd6zKz0b3AjOvgEmXt7tic9VPWl0H5BZoPfcO0z5FJmirChy1a8",
  }
).addTo(map);

export default map;
