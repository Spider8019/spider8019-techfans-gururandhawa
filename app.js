$(document).ready(function(){
  $('#nav-btn').click(changeNav);
  function changeNav()
  {
    $("#nav-links").toggle(2000);
    $("#nav-btn").toggleClass("turn");
  }
})
