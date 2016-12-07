"use strict";

var Node = require('../node.js');

/**
 * Represents a logical Or-Gate
 */
class Or extends Node {

    constructor(childs) {
        super();
        this.childs = childs;
    }

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

module.exports = Or;