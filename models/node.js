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
     * @param {Function} f
     * @param {number} start
     * @param {number} end
     * @param {number} [step=0.01]
     */
    integrate(f, start, end, step) {
        let total = 0;
        step = step || 0.01;
        for (let x = start; x < end; x += step) {
            total += f(x + step / 2) * step;
            // console.log("Total: " + total);
        }
        return total;
    }
}

module.exports = Node;
