let eventos = [];
let fechaHoy;
let eventosPasados = [];

$(document).ready(function () {

  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {
    eventos = resultado.eventos;
    fechaHoy = resultado.fechaActual;

    for (let i = 0; i < eventos.length; i++) {
      if (eventos[i].fecha < fechaHoy) {
        eventosPasados.push(eventos[i]);
      }
    }
    console.log(eventosPasados)
    eventosPasados = eventosPasados.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return -1;
      }
      return 1;
    })

      let html = '';

      for (let i = 0; i < eventosPasados.length; i++) {
        html += `
          <div class="col-md-12">
            <div class="card flex-md-row mb-4 h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h2><a href="detalle.html?id=${eventosPasados[i].id}">${eventosPasados[i].nombre}</a></h2>
                <p class="fecha">${eventosPasados[i].fecha} - ${eventosPasados[i].lugar}</p>
                <p>${eventosPasados[i].descripcion}</p>
                <h4>Costo : ${eventosPasados[i].precio}</h4>
              </div>
            </div>
          </div>
        `
      }

      document.getElementById('pasados').innerHTML = html;
  })
});

//Define las variables que necesites
//Carga los datos que estan en el JSON (info.json) usando AJAX
//Guarda el resultado en variables
//Selecciona los eventos que sean anteriores a la fecha actual del JSON
//Ordena los eventos segun la fecha (los mas recientes primero)
//Crea un string que contenga el HTML que describe el detalle del evento
//Recorre el arreglo y concatena el HTML para cada evento
//Modifica el DOM agregando el html generado