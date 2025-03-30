// Load the express module
const express = require('express');

// Load the path module for handling file paths
const path = require('path');

// Create an Express application to access all functionality of the module
const app = express();

// Define the port number
const port = 1337;

// Define the path to the public directory inside your myNodeSite directory
const publicDir = path.join(__dirname, 'public');

// Function to serve static files
function serveStaticFile(res, filePath, contentType) {
    res.sendFile(path.join(publicDir, filePath), { headers: { 'Content-Type': contentType } });
}

// Specify css as a root directory from which to serve static files
app.use('/css', express.static(path.join(publicDir, 'css')));

// Specify images as a root directory from which to serve static files
app.use('/images', express.static(path.join(publicDir, 'images')));

// Specify js as a root directory from which to serve static files
app.use('/js', express.static(path.join(publicDir, 'js')));

// Serve files based on the requested path using a switch statement
app.get('*', (req, res) => {
    const urlPath = req.path.toLowerCase();

    switch (urlPath) {
        case '/':
        case '/index':
            serveStaticFile(res, 'index.html', 'text/html');
            break;

        case '/about':
            serveStaticFile(res, 'about.html', 'text/html');
            break;

        case '/contact':
            serveStaticFile(res, 'contact.html', 'text/html');
            break;
        case "/images/about.jpg":
            serveStaticFile(res, 'images/about.jpg', 'image/jpeg');
            break;
        case "/images/Alternative.jpg":
            serveStaticFile(res, 'images/Alternative.jpg', 'image/jpeg');
            break;
        case "/images/logo.png":
            serveStaticFile(res, 'images/logo.png', 'image/png');
            break;
        case "/images/Portfolio1.jpeg":
            serveStaticFile(res, 'images/Portfolio1.jpg', 'image/jpeg');
            break;
        case "/images/Portfolio2.jpeg":
            serveStaticFile(res, 'images/Portfolio2.jpg', 'image/jpeg');
            break;
        case "/images/portfolio3.jpeg":
            serveStaticFile(res, 'images/Portfolio3.jpg', 'image/jpeg');
            break;
        case "/images/portfolio4.jpeg":
            serveStaticFile(res, 'images/Portfolio4.jpg', 'image/jpeg');
            break;
        case "/images/portfolio6.jpeg":
            serveStaticFile(res, 'images/Portfolio6.jpg', 'image/jpeg');
            break;
        case "/images/portfolio7.jpeg":
            serveStaticFile(res, 'images/Portfolio7.jpg', 'image/jpeg');
            break;
        case "/images/portfolio8.jpeg":
            serveStaticFile(res, 'images/Portfolio8.jpg', 'image/jpeg');
            break;
        case "/images/portfolio9.jpeg":
            serveStaticFile(res, 'images/Portfolio9.jpg', 'image/jpeg');
            break;
        case "/images/portfolio10.jpeg":
            serveStaticFile(res, 'images/Portfolio10.jpg', 'image/jpeg');
            break;
        case "/images/portfolio11.jpeg":
            serveStaticFile(res, 'images/Portfolio11.jpg', 'image/jpeg');
            break;
        case "/images/Untitled-3.jpg":
            serveStaticFile(res, 'images/Untitled-3.jpg', 'image/jpeg');
            break;
        default:
            // Serve the 404 page for undefined routes
            serveStaticFile(res, '404.html', 'text/html');
            break;
    }
});

// Make the app listen on the port and output the URL to access the server to the console
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});