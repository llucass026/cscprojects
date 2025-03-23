// Function to load HTML content using Ajax
function loadServicesContent() {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the event handler for when the response has loaded
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the web page with the new HTML content
        document.getElementById('root').innerHTML = xhr.responseText;
      }
    };
  
    // Prepare the request
    xhr.open('GET', './services.html', true);
  
    // Send the request
    xhr.send();
  }
  
  // Add event listener to the "HIRE ME" button
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__btn .btn').addEventListener('click', function() {
      loadServicesContent();
    });
  });