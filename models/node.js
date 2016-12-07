"use strict";

const algebra = require('algebra.js');

const Fraction = algebra.Fraction;
const Expression = algebra.Expression;
const Equation = algebra.Equation;

/**
 * Base of every Node.
 * @see or.js, and.js, nand.js, nor.js, basic-event.js
 */
class Node {

    constructor () {
        this.childs = [];
    }

    addChild(child) {
        this.childs.push(child);
        this.childs.forEach(c => c.parent = this);
    }

    calculate(t) {
        // TODO impl.
        return new Expression("(x + 5)^2");
    }

    toString () {
        // TODO impl.
        return this.calculate(3);
    }

    print () {
        console.log( this.toString() );
    }
}

module.exports = Node;
