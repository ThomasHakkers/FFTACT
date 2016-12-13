"use strict";

// Import gates.
const Or = require('./models/gates/or.js');
const Nor = require('./models/gates/nor.js');
const And = require('./models/gates/and.js');
const Nand = require('./models/gates/nand.js');
const BasicEvent = require('./models/basic-event.js');
const config = require('./config');
const plotly = require('plotly')(config.username, config.apiKey);

// TODO 2 ways: Use min/max for AND/OR and use the E(X) to look cool
// TODO         Use normaalDist + normaalDist for OR? ... oid.

/** Complex example with 1 Or Gate connected to two And Gates each connected to two separate BasicEvents */
const rootnode = new Or(
    [   new And( [new BasicEvent(1/2, 1/5), new BasicEvent(1/8, 1/20)] ),
        new And( [new BasicEvent(1/3, 1/10), new BasicEvent(1/12, 1/3)] ) ]
);

/** Simple example with 1 BasicEvent */
// const rootnode = new BasicEvent(1/2, 1/4);
/** Example with 1 Or gate and BasicEvents */
// const rootnode = new Or([new BasicEvent(1/4, 1/2), new BasicEvent(1/2, 1/4)]);

let dataPoints = [];
for(let y = 0; y < 100; y++) {
    let dataRow = [];
    for(let t = 0; t < 100; t++ ){
        dataRow[t] = rootnode.calculate(y/100,t/10);
    }
    dataPoints[y] = dataRow;
}

let data = [
    {
        z : dataPoints,
        type: "surface"
    }
];
let layout = {
    title: "FFTACT complex example",
    autosize: false,
    width: 500,
    height: 500,
    margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90
    }
};
let graphOptions = {layout: layout, filename: "new-3d-surface-or-and-01", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
