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

/** Simple example with 1 BasicEvent */
// const rootnode = new BasicEvent(1/2, 1/4);
/** Example with 1 Or gate and BasicEvents */
// const rootnode = new Or([new BasicEvent(1/4, 1/2), new BasicEvent(1/2, 1/4)]);

/**
 * Simple example that displays the entire 3D graph of the public variable called rootnode.
 */
function test3DGraph() {
    console.log("Warning, this may take a long time (10 minutes) to calculate.");
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
    let graphOptions = {layout: layout, filename: "3D-Graph-Example"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}

/**
 * Simple example that shows how the AND and OR gates work on a cross section on t = 2
 */
function testCrossSection() {
    const base1 = new BasicEvent(1/2, 1/20);
    const base2 = new BasicEvent(1/4, 1/10);

    const rootnode = new And([base1,base2]);
    const rootnode2 = new Or([base2,base1]);


    let trace1 = {
        x: [],
        y: [],
        type: "scatter"
    };
    let trace2 = {
        x: [],
        y: [],
        type: "scatter"
    };
    let trace3 = {
        x: [],
        y: [],
        type: "scatter"
    };
    let trace4 = {
        x: [],
        y: [],
        type: "scatter"
    };

    for(let i = 0; i < 100; i++) {
        trace1.x[i] = i/100;
        trace1.y[i] = base1.calculate(i/100,2);

        trace2.x[i] = i/100;
        trace2.y[i] = base2.calculate(i/100,2);

        trace3.x[i] = i/100;
        trace3.y[i] = rootnode.calculate(i/100,2);

        trace4.x[i] = i/100;
        trace4.y[i] = rootnode2.calculate(i/100,2);
    }

    let data = [trace1, trace2, trace3, trace4];
    let layout = {
        xaxis: {
            autorange: true
        },
        yaxis: {
            autorange: true
        }
    };
    let graphOptions = {layout: layout, filename: "Cross-Section-Example"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}

// Run test code here
test3DGraph();
// testCrossSection();
