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

    // Takes the average of all sigmas of all childs
    getSigma(callback) {
        let tempList = [];
        this.childs.forEach(child => child.getSigma(result => tempList.push(result)));
        callback(tempList.reduce((left, right) => left + right) / this.childs.length);
    }

    getMu(t,callback) {
        let tempList = [];
        this.childs.forEach(child => child.getMu(t, result => tempList.push(result)));
        callback(tempList.reduce((left, right) => left * right));
    }
}

module.exports = And;