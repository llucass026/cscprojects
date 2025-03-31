// Load the express module
const express = require('express');

// Load the path module for handling file paths
const path = require('path');

// Load the express-handlebars module
const { engine } = require('express-handlebars');

// Create an Express application to access all functionality of the module
const app = express();

// Define the port number
const port = 1337;

// Define the path to the public directory inside your myNodeSite directory
const publicDir = path.join(__dirname, 'public');

// Set up the Handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Specify css as a root directory from which to serve static files
app.use('/css', express.static(path.join(publicDir, 'css')));

// Specify images as a root directory from which to serve static files
app.use('/images', express.static(path.join(publicDir, 'images')));

// Specify js as a root directory from which to serve static files
app.use('/js', express.static(path.join(publicDir, 'js')));

// Render each template and send the appropriate data from the server side
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Portfolio' });
});

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Catch-all handler for undefined routes (404 error)
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
});

// 500 error handler for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { title: '500 - Internal Server Error' });
});

// Make the app listen on the port and output the URL to access the server to the console
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});