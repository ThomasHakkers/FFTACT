"use strict";

var Node = require('./node.js');

class BasicEvent extends Node {
    calculate(t) {
        // TODO Recursively do calculations for each child.
        return " it was lots of fun!";
    }
}

module.exports = BasicEvent;