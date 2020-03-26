$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
      var animal =$("#animal").val();
      if(selector === "cheetah") {
        $('#cheetah').show();
        $('.bobcat').hide();
        $('.tiger').hide();
      } else if (selector === "bobcat") {
        $('.cheetah').hide();
        $('.bobcat').show();
        $('.tiger').hide();
      } else if (selector === "tiger")
      $('.cheetah').hide();
      $('.bobcat').hide();
      $('.tiger').show();
    }

      });
  });


//     var answer = $("input:checked").val();
//       return answer.show(function();
//     });
//     console.log(answer.get());
// });

// // 