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
     * @returns {Expression}
     */
    calculate(t) {
        // TODO Verify
        return 1 - super.calculate(t);
    }
}

module.exports = Nand;