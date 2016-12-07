"use strict";

var Node = require('../node.js');

/**
 * Represents a logical And-Gate
 */
class And extends Node {

    constructor(childs) {
        super();
        this.childs = childs;
    }

    /**
     * Recursively calls all childs to obtain their expressions
     * and takes the min values of all of them.
     * This generates the intersection of all functions.
     * min(childs.calculate(t) ... )
     * @param {number} t - Time (unit is defined by user)
     * @returns {Expression}
     */
    calculate(t) {
        // TODO Recursively do calculations for each child.
        return ', then I went to the cinema and ' +
            this.childs
                // Map to calculate
                .map(c => c.calculate(t))
                // Add them all together
                .reduce((a,b) => a + b, "");
    }
}

module.exports = And;