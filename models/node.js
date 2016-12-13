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
}

module.exports = Node;
