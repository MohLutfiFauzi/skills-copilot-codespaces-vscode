// create web server
const express = require('express');
const app = express();
const port = 3000;

// import comments
const comments = require('./comments');

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// get comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});