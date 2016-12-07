"use strict";

// Import gates.
const Or = require('./models/gates/or.js');
const Nor = require('./models/gates/nor.js');
const And = require('./models/gates/and.js');
const Nand = require('./models/gates/nand.js');
const BasicEvent = require('./models/basic-event.js');

// Construct test objects
const rootNode = new Or(
    [   new And( [new BasicEvent(), new BasicEvent()] ),
        new And( [new BasicEvent(), new BasicEvent()] ) ]
);

// Print test behaviour
rootNode.print();
