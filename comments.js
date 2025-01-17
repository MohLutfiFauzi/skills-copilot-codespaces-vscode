// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create comment
app.post('/comments', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    let comment = req.body;
    comments.push(comment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send(comments);
});

// read all comments
app.get('/comments', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    res.send(comments);
});

// read a comment
app.get('/comments/:id', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    let comment = comments.find((comment) => comment.id == req.params.id);
    res.send(comment);
});

// update a comment
app.put('/comments/:id', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    let comment = comments.find((comment) => comment.id == req.params.id);
    comment.body = req.body.body;
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send(comment);
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
    let comments = fs.readFileSync('comments.json');
    comments = JSON.parse(comments);
    comments = comments.filter((comment) => comment.id != req.params.id);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});