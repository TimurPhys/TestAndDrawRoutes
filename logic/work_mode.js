const work_mode_select = document.querySelector(".work_mode select");
const stations = document.querySelector(".stations");
const station_attachment = document.querySelector(".station_attachment");
const routes = document.querySelector(".routes");

let current_work_mode = work_mode_select.value;


work_mode_select.addEventListener("change", (e) => {
    current_work_mode = e.target.value;
    switch (current_work_mode) {
        case "route_create":
            routes.style.display = "block";
            stations.style.display = "none";
            station_attachment.style.display = "none";
            break;
        case "existing_route_edit":
            routes.style.display = "none";
            stations.style.display = "none";
            station_attachment.style.display = "block";
            break;
        case "station_attach":
            routes.style.display = "none";
            stations.style.display = "block";
            station_attachment.style.display = "none";
            break;
    }
    
    console.log(current_work_mode)
})

