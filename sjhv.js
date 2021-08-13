"use strict";

var sjhv = {
  /**
  * Updates the whole document
  * @constructor
  */
  updateHTML: function updateHTML() {
    var sjhvElements = document.querySelectorAll("[data-sjhv]");

    for (var i = 0; i < sjhvElements.length; i++) {
      this.exec(sjhvElements[i]);
    }
  },


  /**
  * Updates the Node and all of its children 
  * @param {Node} n - The Node to be updated
  * @constructor
  */
  updateChildren: function updateChildren(n) {
    if (n.hasAttribute('data-sjhv')) {
      this.exec(n);
    }

    var sjhvElements = n.querySelectorAll(":scope [data-sjhv]");

    for (var i = 0; i < n.length; i++) {
      this.exec(sjhvElements[i]);
    }

  },

  /**
  * Updates every Node in the Nodelist n
  * @param {NodeList} n - The Nodes to be updated
  * @constructor
  */
  updateAll: function updateAll(n) {
    for (var i = 0; i < n.length; i++) {
      this.exec(n[i]);
    }
  },

  /**
  * Updates only n
  * @param {NodeList} n - The Nodes to be updated
  * @constructor
  */
  updateOnly: function updateOnly(n) {
    this.exec(n);
  },
  exec: function exec(e) {
    eval(e.dataset.sjhv);
  }
};