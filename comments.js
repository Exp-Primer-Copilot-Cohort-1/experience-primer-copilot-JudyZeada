// Create web server
var express = require('express');
var app = express();

// Set up the server
app.use(express.static('public'));

// Set up the data
var comments = [
    {name: "John", msg: "Hello, World!"},
    {name: "Mary", msg: "How are you?"}
];

// Set up the routes
app.get('/comments', function(req, res) {
    res.json(comments);
});

app.get('/add', function(req, res) {
    var name = req.query.name;
    var msg = req.query.msg;
    comments.push({name: name, msg: msg});
    res.send("Add comment: " + name + " " + msg);
});

app.get('/delete', function(req, res) {
    var index = req.query.index;
    comments.splice(index, 1);
    res.send("Delete comment: " + index);
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});