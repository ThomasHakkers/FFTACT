"use strict";

/**
 * Base of every Node.
 * @see or.js, and.js, nand.js, nor.js, basic-event.js
 */
class Node {

    constructor () {
        this.childs = [];
    }

    // calculate(y, t) {
    //     return 0;
    // }

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

    /**
     * Retrieves the expression at time t.
     * @param {number} t - Time (unit is defined by user)
     * @param {number} y - percentage from 0 : 1
     *                     (This is the probability that a certain probability will occur on given time t)
     * @returns {number} z value at given y and t.
     */
    calculate(y, t, callback) {
        let self = this;
        // The distribution function over time
        self.getMu(t, mu => {
            console.log("Mu: " + mu);
            self.getSigma(sigma => {
                console.log("Sigma: " + sigma);
                let prefix = 1/Math.sqrt(2*Math.PI * Math.pow(sigma, 2));
                callback(prefix * Math.exp(-(Math.pow(( (y - mu) / sigma),2) )/2))
            })
        });
    }

    // TODO Either refactor or remove
    calculateTimeIndepentantly(y, mu, callback) {
        let self = this;
        // The distribution function over time
        self.getSigma(sigma => {
            console.log("Sigma: " + sigma);
            let prefix = 1/Math.sqrt(2*Math.PI * Math.pow(sigma, 2));
            callback(prefix * Math.exp(-(Math.pow(( (y - mu) / sigma),2) )/2))
        });
    }

    calculateNormalDistribution(y, mu, sigma) {
        // The distribution function over time
        // let distributionFunction = 1 - Math.exp(-(t*this.lambda));
        // Distribution function combined with normal distribution.
        let prefix = 1/Math.sqrt(2*Math.PI * Math.pow(sigma, 2));

        return prefix * Math.exp(-(Math.pow(( (y - mu) / sigma),2) )/2);
    }
}

module.exports = Node;
