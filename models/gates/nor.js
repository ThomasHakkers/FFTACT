"use strict";

var Or = require('./or.js');

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
     * @returns {Expression}
     */
    calculate(t) {
        // TODO Verify
        return 1 - super.calculate(t);
    }
}

module.exports = Nor;