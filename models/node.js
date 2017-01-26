"use strict";

/**
 * Base of every Node.
 * @see or.js, and.js, nand.js, nor.js, basic-event.js
 */
class Node {

    constructor () {
        this.childs = [];
    }

    calculate(y, t) {
        return 0;
    }

    /**
     * Calculate the numeric integration of a function
     * @param {Function} f The function to be integrated
     * @param {number} start
     * @param {number} end
     * @param {number} [step=0.01]
     * @returns {number} The definite integral from start to end
     */
    static integrate(f, start, end, step) {
        let total = 0;
        step = step || 0.01;
        for (let x = start; x < end; x += step) {
            total += f(x + step / 2) * step;
        }
        return total;
    }

    /**
     * Calculate the numeric integration of a function from zero to one
     * @param {Function} f The function to be integrated
     * @param {number} [step=0.01]
     * @returns {number} The definite integral from zero to one
     */
    static integrateFromZeroToOne(f, step){
        return this.integrate(f,0,1,step)
    }
}

module.exports = Node;
