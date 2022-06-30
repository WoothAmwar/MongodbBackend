const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
// Done for All requests. req,res,next will be passed down and saved to other requests (.get,.put,...)
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the promotions endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});   // Only one semi-colon to show it is all connected


promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    /* continue on to look for additional specifications for the promotions endpoint. 
        Allows for specific requests to do stuff differently */
    next();
})
.get((req, res, next) => {
    res.end("Will send details of the promotion: " + req.params.promoId + " to you!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    // Can't post on a single item, since the single item exists so it has been filled.
    res.end("POST operation not supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name +
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter;