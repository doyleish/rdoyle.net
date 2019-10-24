sd_converter= new showdown.Converter();

$(document).ready(function(){
  loadRoute("contact");
});

function loadRoute(route){
  $('.sidebar-active').toggleClass('sidebar-active', 'false');
  $(`#${route}`).toggleClass('sidebar-active', 'true');
  $.get({
    url: `routes/${route}.md`, 
    cache: false,
  }).then(function(data){
    $('.content').html("");
    $('.content').html(sd_converter.makeHtml(data));
  });
}
