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

    calculate(t) {
        // TODO Verify
        return 1 - super.calculate(t);
    }
}

module.exports = Nand;