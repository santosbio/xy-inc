var content = 'json/pontos.json', localX = 20, localY = 10;

function distancia(x1, y1, x2, y2) {
  var dist = Math.abs(x1-x2) + Math.abs(y1-y2);
  return dist; 
}

function listaProximidade(x, y) {
  
  var curTimeStamp = Math.floor(Date.now() / 1000);
  
  $.getJSON( content+'?t='+curTimeStamp ).done(function( data ) {

      var pontos = '';

      $.each( data.points, function( i, item ) {
        var distPoint = distancia(x, y, item.x, item.y);

        if (distPoint <= 10) {
          pontos += '<li>'+item.nome+'</li>';
        }
        
      });

      $('#lista-pontos').html(pontos);
  });
  
}

function listaPontos() {
  var curTimeStamp = Math.floor(Date.now() / 1000);
  
  $.getJSON( content+'?t='+curTimeStamp ).done(function( data ) {
      var pontos = '';

      $.each( data.points, function( i, item ) {
        pontos += '<li>'+item.nome+'</li>';
      });

      console.log(pontos);
      $('#lista-pontos').html(pontos);
  });
  
}

function sendForm(){
    $.ajax({
    type: "POST",
    url: "add-point.php",
    data: jQuery("#form-cadastro").serialize(),
    cache: false,
    success:  function(data){
      listaPontos();
      $('#lista-pontos').show();
      $('#form-cadastro').hide();
    }
  });

}