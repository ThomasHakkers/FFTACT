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

    calculate(t) {
        // TODO Verify
        return 1 - super.calculate(t);
    }
}

module.exports = Nor;