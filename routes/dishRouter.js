const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
// Done for All requests. req,res,next will be passed down and saved to other requests (.get,.put,...)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the dishes endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});   // Only one semi-colon to show it is all connected

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the dishes endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req, res, next) => {
    res.end("Will send details of the dish: " + req.params.dishId + " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    // Can't post on a single item, since the single item exists so it has been filled.
    res.end("POST operation not supported on /dishes/" + req.params.dishId);
})
.put((req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;