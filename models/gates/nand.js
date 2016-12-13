"use strict";

var And = require('./and.js');

/**
 * Represents a logical Nand-Gate
 */
class Nand extends And {

    constructor(childs) {
        super();
        this.childs = childs;
    }

    /**
     * Recursively calls all childs to obtain their expressions
     * and takes inverse of And.calculate(t)
     * This generates the complement of the intersection of all functions.
     * min(childs.calculate(t) ... )
     * @param {number} t - Time (unit is defined by user)
     * @param {number} y - percentage from 0 : 1
     *                     (This is the probability that a certain probability will occur on given time t)
     * @returns {number} z value at given y and t.
     */
    calculate(y,t) {
        return 1 - super.calculate(y,t);
    }
}

module.exports = Nand;