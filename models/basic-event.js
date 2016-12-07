"use strict";

var Node = require('./node.js');

class BasicEvent extends Node {

    constructor(expression) {
        super();
        this.expression = expression;
    }

    /**
     * Retrieves the expression at time t.
     * @param {number} t - Time (unit is defined by user)
     * @returns {string}
     */
    calculate(t) {
        // TODO Return expression
        return " it was lots of fun!";
    }
}

module.exports = BasicEvent;