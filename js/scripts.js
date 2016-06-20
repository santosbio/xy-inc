$(document).ready(function(){

  listaProximidade(localX, localY);

  $('.select-action').on('click', function(e){
    e.preventDefault();

    var item = $(this).attr('data-item');
    var itemText = $(this).text();
    
    $('.selected-action .text').text(itemText);

    if (item == 'proximos') {

      listaProximidade(localX, localY);
      $('#lista-pontos').show();
      $('#form-cadastro').hide();

    } else if (item == 'todos') {
      
      listaPontos();
      $('#lista-pontos').show();
      $('#form-cadastro').hide();

    } else {
      
      $('#lista-pontos').hide();
      $('#form-cadastro').show();

    }
  });

  $("#form-cadastro").on('submit', function(e){
    e.preventDefault();
    sendForm();
  });

});