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
// const rootnode = new Or(
//     [   new And( [new BasicEvent(1/2, 1/5), new BasicEvent(1/8, 1/20)] ),
//         new And( [new BasicEvent(1/3, 1/10), new BasicEvent(1/12, 1/3)] ) ]
// );

/** Simple example with 1 BasicEvent */
// const rootnode = new BasicEvent(1/2, 1/4);
/** Example with 1 Or gate and BasicEvents */
// const rootnode = new Or([new BasicEvent(1/4, 1/2), new BasicEvent(1/2, 1/4)]);

// let dataPoints = [];
// for(let y = 0; y < 100; y++) {
//     let dataRow = [];
//     for(let t = 0; t < 100; t++ ){
//         dataRow[t] = rootnode.calculate(y/100,t/10);
//     }
//     dataPoints[y] = dataRow;
// }
//
// let data = [
//     {
//         z : dataPoints,
//         type: "surface"
//     }
// ];
// let layout = {
//     title: "FFTACT complex example",
//     autosize: false,
//     width: 500,
//     height: 500,
//     margin: {
//         l: 65,
//         r: 50,
//         b: 65,
//         t: 90
//     }
// };
// let graphOptions = {layout: layout, filename: "new-3d-surface-or-and-01", fileopt: "overwrite"};
// plotly.plot(data, graphOptions, function (err, msg) {
//     console.log(msg);
// });

// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api

const base1 = new BasicEvent(1/2, 1/20);
const base2 = new BasicEvent(1/4, 1/10);
const rootnode = new And([base1,base2]);
const rootnode2 = new And([base2,base1]);


var trace1 = {
    x: [],
    y: [],
    type: "scatter"
};
var trace2 = {
    x: [],
    y: [],
    type: "scatter"
};
var trace3 = {
    x: [],
    y: [],
    type: "scatter"
};
var trace4 = {
    x: [],
    y: [],
    type: "scatter"
};

for(let i = 0; i < 100; i++) {
    trace1.x[i] = i/100;
    trace1.y[i] = base1.calculate(i/100, 2);
    trace2.x[i] = i/100;
    trace2.y[i] = base2.calculate(i/100, 2);
    trace3.x[i] = i/100;
    trace3.y[i] = rootnode.calculate(i/100,2);
    // trace4.x[i] = i/100;
    // trace4.y[i] = rootnode2.calculate(i/100,2);
}


var data = [trace1, trace2, trace3];
var layout = {
    xaxis: {
        autorange: true
    },
    yaxis: {
        autorange: true
    }
};
var graphOptions = {layout: layout, filename: "plotly-log-axes", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
