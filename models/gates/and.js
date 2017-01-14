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
     * @param {number} y - percentage from 0 : 1
     *                     (This is the probability that a certain probability will occur on given time t)
     * @returns {number} z value at given y and t.
     */
    calculate(y,t) {
        // return this.integrate(x =>
        //     this.childs[0].calculate(x,t) * this.childs[1].calculate(y / x,t), 0, 1, 0.01)
        //     +
        //     this.integrate(x =>
        //     this.childs[1].calculate(x,t) * this.childs[0].calculate(y / x,t), 0, 1, 0.01)
        //     ;

        return this.childs.reduce(
            (a,b) =>
                this.integrate(x =>
                    a.calculate(x,t) * b.calculate(y / x,t), 0, 1, 0.01)
                    +
                this.integrate(x =>
                b.calculate(x,t) * a.calculate(y / x,t), 0, 1, 0.01));

        // let self = this;
        // return this.childs
        //     .map(child => self.integrate(f => child.calculate(f,t), 0, 100, 0.1)
        //
        // // TODO Recursively do calculations for each child.
        // return this.childs
        //         // Map to calculate
        //         .map(c => c.calculate(y,t))
        //         // Add them all together
        //         .reduce((a,b) => Math.min(a,b), Number.MAX_SAFE_INTEGER);
    }
}

module.exports = And;