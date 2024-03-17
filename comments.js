// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// get comments
app.get('/comments', function(req, res) {
  fs.readFile(commentsPath, 'utf8', function(err, data) {
    if (err) {
      res.send('[]');
    } else {
      res.send(data);
    }
  });
});

// add comment
app.post('/comments', function(req, res) {
  fs.readFile(commentsPath, 'utf8', function(err, data) {
    if (err) {
      res.send('[]');
    } else {
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile(commentsPath, JSON.stringify(comments), function(err) {
        if (err) {
          res.send('[]');
        } else {
          res.send(comments);
        }
      });
    }
  });
});

// start server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```

comments.json
```json
[]
```

public/index.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Comment Box</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Comment Box</h1>
  <div id="commentBox"></div>
  <form id="commentForm">
    <input type="text" id="author" placeholder="Your name" required>
    <input type="text" id="text" placeholder="Say something..." required>
    <input type="submit" value="Post">
  </form>
  <script src="http://fb.me/react-0.13.3.js"></script>
  <script src="http://fb.me/JSXTransformer-0.13.3.js"></script>
  <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script type="text/jsx" src