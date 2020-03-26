$(document).ready(function() {
  $("input").click(funtion(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();
  });
});