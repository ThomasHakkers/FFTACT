"use strict";

// Import gates.
const Or = require('./models/gates/or.js');
const Nor = require('./models/gates/nor.js');
const And = require('./models/gates/and.js');
const Nand = require('./models/gates/nand.js');
const BasicEvent = require('./models/basic-event.js');
const config = require('./config');
const plotly = require('plotly')(config.username, config.apiKey);

// Construct test objects
const rootNode = new Or(
    [   new And( [new BasicEvent(), new BasicEvent()] ),
        new And( [new BasicEvent(), new BasicEvent()] ) ]
);

// Print test behaviour
rootNode.print();

// Test data TODO remove
var data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
var graphOptions = {fileopt : "extend", filename : "nodenodenode"};

plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
