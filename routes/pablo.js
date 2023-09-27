const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define your new route
app.get('/new-route', (req, res) => {
  res.send('This is a new route VAMOS PAPU!');
});

module.exports = app;