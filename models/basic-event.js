"use strict";

var Node = require('./node.js');

class BasicEvent extends Node {

    constructor(lambda, sigma) {
        super();
        this.lambda = lambda;
        this.sigma = sigma;
        // Predefined constant 1 / sqrt(2*pi*sigma^2)
        this.prefix = 1/Math.sqrt(2*Math.PI * Math.pow(sigma, 2));
    }

    // TODO Rename
    getMu(t, callback){
        callback(1 - Math.exp(-(t*this.lambda)));
    }

    getSigma(callback){
        callback(this.sigma);
    }
}

module.exports = BasicEvent;