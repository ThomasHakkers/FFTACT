"use strict";

const Or = require('./or.js');

/**
 * Represents a logical Nor-Gate
 */
class Nor extends Or {

    constructor(childs) {
        super();
        this.childs = childs;
    }

    /**
     * Recursively calls all childs to obtain their expressions
     * and takes inverse of Or.calculate(t)
     * This generates the complement of the union of all functions.
     * min(childs.calculate(t) ... )
     * @param {number} t - Time (unit is defined by user)
     * @param {number} y - percentage from 0 : 1
     *                     (This is the probability that a certain probability will occur on given time t)
     * @returns {number} z value at given y and t.
     */
    calculate(y, t) {
        return super.calculate(1 - y, t);
    }
}

module.exports = Nor;