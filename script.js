function guardar_fecha(){
    let fecha = document.getElementById("fecha").value
    localStorage.setItem("fecha",fecha)
}

function obtener_fecha(){
    let date =  localStorage.getItem("fecha")

    let fecha_texto = document.getElementById("fecha_text");
    fecha_texto.innerHTML = `${date}` 

}

function buscar_asteriodes() {
    let date =  localStorage.getItem("fecha")

    let results_container = document.getElementById("results_container");

    let config = {
    method: "get",
    url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=trFh9e14F2LxoOXZ8V15TbGVDuJgBw2opVcdVICe`,
    headers: {}
    }

    axios(config)
    .then(response => {
        let objects = response.data.near_earth_objects[date]
        console.log(objects)
    
        let html = ""
        for(let i = 0; i<objects.length;i++) {
        html += `<tr>
                    <td>${objects[i].id}<td>
                    <td>${objects[i].name}<td>
                    <td>${objects[i].is_potentially_hazardous_asteroid}<td>
                </tr>`
        }
        results_container.innerHTML = html
    })
}