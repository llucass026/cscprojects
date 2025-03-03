// Ensure the DOM is fully loaded before running the script
$(document).ready(function() {
    // Event handler for the button click
    $('#loadReviewsButton').on('click', function() {
        // Load the content from the external HTML file into the target element
        $('#reviews-content').load('reviews.html', function(response, status, xhr) {
            if (status == "error") {
                // Handle errors
                $('#reviews-content').html("An error occurred: " + xhr.status + " " + xhr.statusText);
            } else {
                // Apply a jQuery effect for smooth transition
                $('#reviews-content').hide().fadeIn(1000);
            }
        });
    });
});