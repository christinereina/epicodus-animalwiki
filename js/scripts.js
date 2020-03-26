$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
      var selector =$("#selector").val();
      console.log(selector)
      if(selector === "cheetah") {
        $('.cheetah').toggle();
        $('.bobcat').hide();
        $('.tiger').hide();
      } else if (selector === "bobcat") {
        $('.cheetah').hide();
        $('.bobcat').toggle();
        $('.tiger').hide();
      } else if (selector === "tiger") {
      $('.cheetah').hide();
      $('.bobcat').hide();
      $('.tiger').toggle();
    }

      });
  });
