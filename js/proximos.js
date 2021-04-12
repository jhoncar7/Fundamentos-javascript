let eventos = [];
let fechaHoy;
let eventosFuturos = [];

$(document).ready(function () {

  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {
    eventos = resultado.eventos;
    fechaHoy = resultado.fechaActual;

    for (let i = 0; i < eventos.length; i++) {
      if (eventos[i].fecha > fechaHoy) {
        eventosFuturos.push(eventos[i]);
      }
    }
    console.log(eventosFuturos)
    eventosFuturos = eventosFuturos.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return -1;
      }
      return 1;
    })

      let html = '';

      for (let i = 0; i < eventosFuturos.length; i++) {
        html += `
          <div class="col-md-12">
            <div class="card flex-md-row mb-4 h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h2><a href="detalle.html?id=${eventosFuturos[i].id}">${eventosFuturos[i].nombre}</a></h2>
                <p class="fecha">${eventosFuturos[i].fecha} - ${eventosFuturos[i].lugar}</p>
                <p>${eventosFuturos[i].descripcion}</p>
                <h4>Costo : ${eventosFuturos[i].precio}</h4>
              </div>
            </div>
          </div>
        `
      }

      document.getElementById('proximos').innerHTML = html;
  })
});

// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites
//Carga los datos que estan en el JSON (info.json) usando AJAX
//Guarda el resultado en variables
//Selecciona los eventos que sean posteriores a la fecha actual del JSON
//Ordena los eventos segun la fecha (los mas cercanos primero)
//Crea un string que contenga el HTML que describe el detalle del evento
//Recorre el arreglo y concatena el HTML para cada evento
//Modifica el DOM agregando el html generado dentro del div con id=evento