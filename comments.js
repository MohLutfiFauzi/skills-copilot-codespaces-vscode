// Create web server
// Create a new express application
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const express = require('express');
const app = express();
const port = 3000;

// Create a new route that listens for GET requests to the /comments path
app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'Morgan', text: 'This is a comment' },
    { id: 2, author: 'Morgan', text: 'This is a second comment' },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});