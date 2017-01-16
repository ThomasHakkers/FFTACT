"use strict";

// Import gates.
const Or = require('./models/gates/or.js');
const Nor = require('./models/gates/nor.js');
const And = require('./models/gates/and.js');
const Nand = require('./models/gates/nand.js');
const BasicEvent = require('./models/basic-event.js');
const config = require('./config');
const plotly = require('plotly')(config.username, config.apiKey);

/** Complex example with 1 Or Gate connected to two And Gates each connected to two separate BasicEvents */
const rootnode = new Or(
    [   new And( [new BasicEvent(1/2, 1/5), new BasicEvent(1/8, 1/20)] ),
        new And( [new BasicEvent(1/3, 1/10), new BasicEvent(1/12, 1/3)] ) ]
);
//
// /** Simple example with 1 BasicEvent */
// // const rootnode = new BasicEvent(1/2, 1/4);
// /** Example with 1 Or gate and BasicEvents */
// // const rootnode = new Or([new BasicEvent(1/4, 1/2), new BasicEvent(1/2, 1/4)]);

// TODO Refactor properly
function test3DGraph() {
    let dataPoints = [];
    for(let y = 0; y < 100; y++) {
        let dataRow = [];
        for(let t = 0; t < 100; t++ ){
            rootnode.calculate(y/100,t/10, result => {
                dataRow[t] = result;
            });
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
    let graphOptions = {layout: layout, filename: "new-3d-surface-or-and-02"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}

// TODO Refactor properly
function testCrossSection() {
    const base1 = new BasicEvent(1/2, 1/20);
    const base2 = new BasicEvent(1/4, 1/10);
    const base3 = new BasicEvent(0, 3/40);

    const rootnode = new And([base1,base2]);
    const rootnode2 = new Or([base2,base1]);


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
        base1.calculate(i/100, 2, result => {
            trace1.y[i] = result;
        });
        trace2.x[i] = i/100;
        base2.calculate(i/100, 2, result => {
            trace2.y[i] = result;
        });
        trace3.x[i] = i/100;
        rootnode.calculate(i/100,2, result => {
            trace3.y[i] = result;
        });
        trace4.x[i] = i/100;
        rootnode2.calculate(i/100,2, result => {
            trace4.y[i] = result;
        });
    }


    var data = [trace1, trace2, trace3, trace4];
    var layout = {
        xaxis: {
            autorange: true
        },
        yaxis: {
            autorange: true
        }
    };
    var graphOptions = {layout: layout, filename: "plotly-log-axes-2"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}
