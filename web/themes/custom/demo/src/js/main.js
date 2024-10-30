(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.Main = {

      attach: function (context, settings) {
        
        console.log('i am here');
            
        $(".job-wrapper .jobs").find('.job-close ').hide(); 
        $('.job-wrapper .jobs').on("hover", function () {
            // Toggle visibility of children within the clicked parent div
            // $(this).children(".slider-body").toggle();
        });
      }
  };

})(jQuery, Drupal, drupalSettings);
