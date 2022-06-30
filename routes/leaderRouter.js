const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
// Done for All requests. req,res,next will be passed down and saved to other requests (.get,.put,...)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the promotions endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});   // Only one semi-colon to show it is all connected


leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the promotions endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req, res, next) => {
    res.end("Will send details of the leader: " + req.params.leaderId + " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    // Can't post on a single item, since the single item exists so it has been filled.
    res.end("POST operation not supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;