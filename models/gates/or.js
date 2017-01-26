"use strict";

const Node = require('../node.js');
const config = require('../../config');

/**
 * Represents a logical Or-Gate
 */
class Or extends Node {

    constructor(childs) {
        super();
        this.childs = childs;
    }

    calculate(y, t) {
        // For each child
        return this.childs
        // Map it to the calculate function
            .map(child => function (y, t) {
                return child.calculate(y, t);
            })
            // Reduce all functions down to a single function
            .reduce(
                (left, right) =>
                    function (y, t) {
                        return Node.integrateFromZeroToOne(x =>
                            left(x, t) * right((y - x) / (1 - x), t), config.step)
                            + Node.integrateFromZeroToOne(x =>
                            right(x, t) * left((y - x) / (1 - x), t), config.step)
                    }
            )(y, t); // And call the resulting function
    }
}

module.exports = Or;