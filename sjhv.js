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
  updateHTML() {
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

    let sjhv = this;

    let id = e.dataset.sjhv;

    execPath(sjhv.bounds[id], e)

    function execPath(path, pathE) {

      for (var prop in path) {
        if (path.hasOwnProperty(prop)) {

          let bound = path[prop];

          if (bound instanceof BoundVar) {

            let value = sjhv;

            for (let i = 0; i < bound.path.length; i++) {

              value = value[bound.path[i]];

            }

            pathE[prop] = value

          } else if (typeof bound == "object") {

            execPath(bound, pathE[prop]);

          }

          else {

            pathE[prop] = bound;

          }
        }
      }

    }

  };

  boundVar(v) {

    return new BoundVar(["values"].concat(v.split(".")));

  };

  setNestedValue(field, val) {

    let fields = field.split(".")

    let ob = this.values

    for (let i = 0; i < fields.length - 1; i++) {

      if (!ob.hasOwnProperty(fields[i])) {

        ob[fields[i]] = {};

      }

      ob = ob[fields[i]]

    }

    ob[fields[fields.length - 1]] = val;

    return field;

  };

  setNestedBound(field, val) {

    let fields = field.split(".")

    let ob = this.bounds

    for (let i = 0; i < fields.length - 1; i++) {

      if (!this.hasOwnProperty(fields[i])) {

        ob[fields[i]] = {};

      }

      ob = ob[fields[i]]

    }

    ob[fields[fields.length - 1]] = val;

    return field;

  };

  values = {

  };

  bounds = {

  };

};

class BoundVar {

  constructor(path) {

    this.path = typeof path == "object" ? path : [];

  }

};