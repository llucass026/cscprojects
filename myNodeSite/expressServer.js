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

// Specify css as a root directory from which to serve static files
app.use('/css', express.static(path.join(publicDir, 'css')));

// Specify images as a root directory from which to serve static files
app.use('/images', express.static(path.join(publicDir, 'images')));

// Specify js as a root directory from which to serve static files
app.use('/js', express.static(path.join(publicDir, 'js')));

// Serve the home page (index.html) when the user navigates to the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// Serve the about page (about.html) when the user navigates to /about
app.get('/about', (req, res) => {
    res.sendFile(path.join(publicDir, 'about.html'));
});

// Serve the contact page (contact.html) when the user navigates to /contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(publicDir, 'contact.html'));
});

// Add a wildcard for any route not defined and respond by serving the 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(publicDir, '404.html'));
});

// Make the app listen on the port and output the URL to access the server to the console
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});