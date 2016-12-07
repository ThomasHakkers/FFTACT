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
        // TODO Fix array.reduce.
        var result = ", then I went to the cinema and ";
        //return ', then I went to the cinema and ' + this.childs.reduce((a,b) => {console.log(a); return 5}, "");
        this.childs.forEach(c =>{
            result += c.calculate(t);
        });
        return result;
    }
}

module.exports = And;