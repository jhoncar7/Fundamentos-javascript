let eventos;

$(document).ready(function(){

  $("#evento").hide();

  $.ajax({
      url:"info.json"
  }).done(function(resultado){
      eventos = resultado.eventos;

      var id = location.search.match(/id=(\d)*/)[1]
          //http://127.0.0.1:5500/Unidad%203/16.Ejer_JQUERY/index.html?id=7
      var evento = eventos.find(function(element){
          return element.id == id;
      })

      var html = `
      <div class="col-md-12">
      <div class="card flex-md-row mb-4 h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h2>${evento.nombre}</h2>
        <p class="fecha">${evento.fecha} - ${evento.lugar}</p>
        <p>${evento.descripcion}</p>
        <h4 class="costo">Costo : ${evento.precio}</h4>
        <p class="invitados">Invitados: ${evento.invitados}</p>
        </div>
        </div>
        </div>
      `
      document.getElementById("evento").innerHTML = html
      $("#evento").slideDown("slow");
  });
});

// Hemos omitido los acentos en los comentarios por compatibilidad
//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
//Carga los datos que estan en el JSON (info.json) usando AJAX
//Guarda el resultado en una variable
//Busca el elemento en el arreglo
//Crea un string que contenga el HTML que describe el detalle del evento
//Modifica el DOM agregando el html generado dentro del div con id=evento