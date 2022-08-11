const express = require('express');
const cors = require('cors');
const app = express();

// origins that the sever will accept
var whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://DESKTOP-CGAOI0D:3001']

var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log('Header Origin');
    console.log(req.header('Origin'));
    console.log(whitelist.indexOf(req.header('Origin')));
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };

    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);