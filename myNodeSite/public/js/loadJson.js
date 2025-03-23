// Function to load JSON content using Ajax
function loadContactForm() {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the event handler for when the response has loaded
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Check if the server status was okay
        if (xhr.status === 200) {
          // Get JSON data from the server
          var data = JSON.parse(xhr.responseText);
  
          // Create a variable to hold the new HTML data
          var formHTML = '';
  
          // Add the form title
          formHTML += '<h2 class="section__header">' + data.contactForm.title + '</h2>';
  
          // Start the form
          formHTML += '<form id="contact-form">';
  
          // Loop through the fields and add them to the form
          data.contactForm.fields.forEach(function(field) {
            formHTML += '<div class="form__group">';
            formHTML += '<label for="' + field.id + '">' + field.label + '</label>';
            if (field.type === 'textarea') {
              formHTML += '<textarea id="' + field.id + '" name="' + field.name + '" rows="' + field.rows + '" required></textarea>';
            } else {
              formHTML += '<input type="' + field.type + '" id="' + field.id + '" name="' + field.name + '" required />';
            }
            formHTML += '</div>';
          });
  
          // Add the submit button
          formHTML += '<button type="submit" class="btn">' + data.contactForm.submitButton.text + '</button>';
  
          // End the form
          formHTML += '</form>';
  
          // Update the web page to contain the new HTML
          document.getElementById('contact').innerHTML = formHTML;
        }
      }
    };
  
    // Prepare the request
    xhr.open('GET', './data/contact.json', true);
  
    // Send the request
    xhr.send();
  }
  
  // Add event listener to trigger the Ajax request when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    loadContactForm();
  });