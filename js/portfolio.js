$(document).ready(function() {
    // Lightbox functionality
    $('a[data-lightbox="portfolio"]').on('click', function(event) {
      // Prevent the default action of the anchor tag
      event.preventDefault();
      
      // Get the href attribute (image source) of the clicked anchor tag
      var imgSrc = $(this).attr('href');
      
      // Create the lightbox HTML structure
      var lightbox = `
        <div class="lightbox">
          <span class="lightbox-close">&times;</span>
          <div class="lightbox-content">
            <img src="${imgSrc}" alt="portfolio">
          </div>
        </div>
      `;
      
      // Append the lightbox to the body
      $('body').append(lightbox);
      // Fade in the lightbox
      $('.lightbox').fadeIn();
  
      // Close lightbox when the close button is clicked
      $('.lightbox-close').on('click', function() {
        $('.lightbox').fadeOut(function() {
          $(this).remove();
        });
      });
  
      // Close lightbox when clicking outside of the image
      $('.lightbox').on('click', function(event) {
        // If the clicked element is the image, do nothing
        if ($(event.target).is('.lightbox-content img')) {
          return;
        }
        // Otherwise, fade out and remove the lightbox
        $('.lightbox').fadeOut(function() {
          $(this).remove();
        });
      });
    });
  });