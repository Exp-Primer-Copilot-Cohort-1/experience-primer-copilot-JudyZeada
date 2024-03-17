// create web server 
// create a route for comments
// create a route for comments/new
// create a route for comments/:id
// create a route for comments/:id/edit
// create a route for comments/:id/delete
// create a route for comments/:id/put
// create a route for comments/:id/patch
// create a route for comments/:id/delete
// export the router
// export the comments route
// export the comments/new route
// export the comments/:id route
// export the comments/:id/edit route
// export the comments/:id/delete route
// export the comments/:id/put route
// export the comments/:id/patch route
// export the comments/:id/delete route

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Comments');
});

router.get('/new', (req, res) => {
    res.send('New Comment');
});

router.get('/:id', (req, res) => {
    res.send('Comment');
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit Comment');
});

router.get('/:id/delete', (req, res) => {
    res.send('Delete Comment');
});

router.put('/:id', (req, res) => {
    res.send('Put Comment');
});

router.patch('/:id', (req, res) => {
    res.send('Patch Comment');
});

router.delete('/:id', (req, res) => {
    res.send('Delete Comment');
});

module.exports = router;    