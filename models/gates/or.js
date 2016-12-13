"use strict";

var Node = require('../node.js');

/**
 * Represents a logical Or-Gate
 */
class Or extends Node {

    constructor(childs) {
        super();
        this.childs = childs;
    }

    /**
     * Recursively calls all childs to obtain their expressions
     * and takes the max values of all of them.
     * This generates the union of all functions.
     * max(childs.calculate(t) ... )
     * @param {number} t - Time (unit is defined by user)
     * @param {number} y - percentage from 0 : 1
     *                     (This is the probability that a certain probability will occur on given time t)
     * @returns {number} z value at given y and t.
     */
    calculate(y, t) {
        // TODO Recursively do calculations for each child.
        return this.childs
        // Map to calculate
            .map(c => c.calculate(y,t))
            // Add them all together
            .reduce((a,b) => Math.max(a,b), 0);
    }
}

module.exports = Or;