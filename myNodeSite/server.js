// Load the required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port number
const port = 1337;

// Function to serve static files
function serveStaticFile(filePath, res) {
    // Read the file from the file system
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If there is an error reading the file, send a 500 Internal Server Error response
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Internal Server Error");
            console.error(`Error reading file: ${filePath}\n`, err);
            return;
        }

        // Determine the content type based on the file extension
        const ext = path.extname(filePath).toLowerCase();
        let contentType = 'text/plain';

        if (ext === '.html') {
            contentType = 'text/html';
        } else if (ext === '.css') {
            contentType = 'text/css';
        } else if (ext === '.js') {
            contentType = 'application/javascript';
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg'].includes(ext)) {
            contentType = `image/${ext.substring(1)}`;
        }

        // Send the file content with the appropriate content type
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

// Create the HTTP server
http.createServer(function(req, res) {
    // Normalize the URL by removing the querystring, optional trailing slash, and making it lowercase
    let urlPath = req.url.split('?')[0].replace(/\/$/, '').toLowerCase();

    // Determine the file path based on the URL path
    let filePath = '';
    if (urlPath === '' || urlPath === '/index') {
        filePath = 'public/index.html';
    } else if (urlPath === '/404') {
        filePath = 'public/404.html';
    } else if (urlPath === '/contact') {
        filePath = 'public/reviews.html';
    } else if (urlPath.startsWith('/css/')) {
        filePath = path.join('public', urlPath);
    } else if (urlPath.startsWith('/Images/')) {
        filePath = path.join('public', urlPath);
    } else if (urlPath.startsWith('/js/')) {
        filePath = path.join('public', urlPath);
    } else {
        // If the URL path does not match any known paths, serve the 404 page
        filePath = 'public/404.html';
    }

    // Serve the static file
    serveStaticFile(filePath, res);
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});