   function scrollWin2(){
            $("html, body").animate({ scrollTop: $('.display_info2').offset().top }, 1200);
          }

          $(document).ready(function() {
              $(".trigger2").click(function(){$(".caja2").slideToggle();});
          });