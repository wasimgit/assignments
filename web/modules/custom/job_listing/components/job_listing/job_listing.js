(function ($, Drupal, drupalSettings) {

    Drupal.behaviors.Main = {
  
        attach: function (context, settings) {
          
          
          $(".job-wrapper .jobs").find('.job-close').hide(); 
  
  
          $('.job-wrapper .jobs').hover(
            function() {
              // Show the div on mouse enter
              $(this).children('.job-close').show();
            },
            function() {
              // Hide the div on mouse leave
              $(this).children('.job-close').hide();
            }
          );
        }
    };
  
  })(jQuery, Drupal, drupalSettings);