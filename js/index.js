let eventos = [];
let fechaHoy;
let eventosPasados = [];
let eventosFuturos = [];

$(document).ready(function () {

  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {
    eventos = resultado.eventos;
    fechaHoy = resultado.fechaActual;

    for (let i = 0; i < eventos.length; i++) {
      if (eventos[i].fecha < fechaHoy) {
        eventosPasados.push(eventos[i]);
      } else {
        eventosFuturos.push(eventos[i])
      }
    }

    eventosPasados = eventosPasados.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return -1;
      }
      return 1;
    })

    eventosFuturos = eventosFuturos.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return -1;
      }
      return 1;
    })

    mostarDosEventos(eventosFuturos, 'proximos');
    mostarDosEventos(eventosPasados, 'pasados');

    function mostarDosEventos(events, getId) {
      let html = '';

      for (let i = 0; i < 2; i++) {
        html += `
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h2><a href="detalle.html?id=${events[i].id}">${events[i].nombre}</a></h2>
                <p class="fecha">${events[i].fecha}</p>
                <p>${events[i].descripcion}</p>
              </div>
            </div>
          </div>
        `
      }

      document.getElementById(getId).innerHTML = html;
    }
  })
});

// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites
//Carga los datos que estan en el JSON (info.json) usando AJAX
//Guarda el resultado en variables
//Clasifica los eventos segun la fecha actual del JSON
//Ordena los eventos segun la fecha (los mas cercanos primero)
//Extrae solo dos eventos
//Ordena los eventos segun la fecha (los mas cercanos primero)
//Extrae solo dos eventos
//Crea un string que contenga el HTML que describe el detalle del evento
//Recorre el arreglo y concatena el HTML para cada evento
//Modifica el DOM agregando el html generado
//Crea un string que contenga el HTML que describe el detalle del evento
//Recorre el arreglo y concatena el HTML para cada evento
//Modifica el DOM agregando el html generado