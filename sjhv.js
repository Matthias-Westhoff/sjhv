"use strict";

class SJHV {

  /**
  * Creates a new SJHV 
  * @param {Node} n - The Node to be updated
  * @constructor
  */

  constructor(values) {
    this.values = typeof values == "object" ? values : {};
  }


  /**
  * Updates the whole document
  * @constructor
  */
  updateHTML () {
    var sjhvElements = document.querySelectorAll("[data-sjhv]");

    for (var i = 0; i < sjhvElements.length; i++) {
      this.exec(sjhvElements[i]);
    }
  };


  /**
  * Updates the Node and all of its children 
  * @param {Node} n - The Node to be updated
  * @constructor
  */
  updateChildren(n) {
    if (n.hasAttribute('data-sjhv')) {
      this.exec(n);
    }

    var sjhvElements = n.querySelectorAll(":scope [data-sjhv]");

    for (var i = 0; i < n.length; i++) {
      this.exec(sjhvElements[i]);
    }

  };

  /**
  * Updates every Node in the Nodelist n
  * @param {NodeList} n - The Nodes to be updated
  * @constructor
  */
  updateAll(n) {
    for (var i = 0; i < n.length; i++) {
      this.exec(n[i]);
    }
  };

  /**
  * Updates only n
  * @param {NodeList} n - The Nodes to be updated
  * @constructor
  */
  updateOnly(n) {
    this.exec(n);
  };

  exec(e) {
    let entries = Object.entries(JSON.parse(e.dataset.sjhv));
    let entrieslen = entries.length;

    for(let i = 0; i < entrieslen; i++) {
      let property = entries[i];
      e[property[0]] = this.values[property[1]];
    }

  };

  values = {};

};