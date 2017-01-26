"use strict";

const Node = require('./node.js');

class BasicEvent extends Node {

    constructor(lambda, sigma) {
        super();
        this.lambda = lambda;
        this.sigma = sigma;
        // Predefined constant 1 / sqrt(2*pi*sigma^2)
        this.prefix = 1/Math.sqrt(2*Math.PI * Math.pow(sigma, 2));
    }

    calculate(y, t) {
        // The distribution function over time
        let distributionFunction = 1 - Math.exp(-(t*this.lambda));
        // Distribution function combined with normal distribution.
        return this.prefix * Math.exp(-(Math.pow(( (y - distributionFunction) / this.sigma),2) )/2);
    }
}

module.exports = BasicEvent;