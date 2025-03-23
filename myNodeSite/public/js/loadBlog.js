// Function to load XML content using Ajax
function loadBlogContent() {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Define the event handler for when the response has loaded
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Check if the server status was okay
        if (xhr.status === 200) {
          // Get the XML from the server
          var xmlDoc = xhr.responseXML;
  
          // Find the XML elements and loop through them
          var blogs = xmlDoc.getElementsByTagName('blog');
          var blogGrid = document.getElementById('blog-grid');
  
          for (var i = 0; i < blogs.length; i++) {
            var blogCard = document.createElement('div');
            blogCard.className = 'blog__card';
  
            var h5 = document.createElement('h5');
            h5.textContent = blogs[i].getElementsByTagName('date')[0].textContent;
            blogCard.appendChild(h5);
  
            var h4 = document.createElement('h4');
            h4.textContent = blogs[i].getElementsByTagName('title')[0].textContent;
            blogCard.appendChild(h4);
  
            var p = document.createElement('p');
            p.textContent = blogs[i].getElementsByTagName('description')[0].textContent;
            blogCard.appendChild(p);
  
            blogGrid.appendChild(blogCard);
          }
        }
      }
    };
  
    // Prepare the request
    xhr.open('GET', './data/blogs.xml', true);
  
    // Send the request
    xhr.send();
  }
  
  // Add event listener to trigger the Ajax request when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    loadBlogContent();
  });