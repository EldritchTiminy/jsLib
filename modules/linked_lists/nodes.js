/*
creates a very basic node object
the properties of the object are accessible outside of the object ("public")
*/
function basicNodeFactory (value, link = null) {
  let node = {
    _val: value,
    _link: link,
    isNode: true,
    get val () {return this._val;},
    get link () {return this._link;},
    set val (newValue) {this._val = newValue;},
    set link (newLink) {this._link = newLink;}
  };
  return node;
};

/*
"NO" = "No Overrite"
creates a very basic node object, but without a setter for _val
this creates a node that cannot be changed
the node must be "orphaned" and then replaced
*/
function basicNodeFactoryNO (value, link = null) {
  let node = {
    _val: value,
    _link: link,
    isNode: true,
    get val () {return this._val;},
    get link () {return this._link;},
    set link (newLink) {this._link = newLink;}
  };
  return node;
};

/*
creates a node object where properties are encapsulated (held in a private state)
the object itself does not house the properties, only references to them
the objects methods are the only way to access the properties
properties are held in the instance of the function itself
methods are recreated for each instance (less memory efficient than classes)
*/
function privateNodeFactory (value, link = null) {
  let _val = value;
  let _link = link;
  return {
    isNode: true,
    get val () {return _val;},
    set val (newVal) {_val = newVal;},
    get link () {return _link;},
    set link (newLink) {_link = newLink;}
  };
};

/*
creates a node object with ecapsulated properties, but with no setter for val
to change the nodes value the node will have to be orphaned and replaced
*/
function privateNodeFactoryNO (value, link = null) {
  let _val = value;
  let _link = link;
  return {
    isNode: true,
    get val () {return _val;},
    get link () {return _link;},
    set link (newLink) {_link = newLink;}
  };
};

/*
creates a node object that cannot be added to or changed
attempting to do so will fail and/or throw an error
*/
function immutableNodeFactory (value, link = null) {
  let newNode = {
    _val: value,
    _link: link,
    isNode: true,
    get value () {return _val;},
    get link () {return _link;}
  }
  return Object.freeze(newNode);
};

/*
class for a basic node structure
classes are more memory efficient and easier to add to later, but less flexible
this returns an object instance of a basic node
*/
class basicNode {
  constructor (value, link = null) {
    this._val = value;
    this._link = link;
  };
  get value () {return this._val;};
  set value (newValue) {this._val = newValue;};
  get link () {return this._link;};
  set link (newLink) {this._link = newLink};
};

/*
returns an object instance of a basic node, but without a setter for val
to change the nodes value the node must be orphaned and replaced
*/
class basicNodeNO {
  constructor (value, link = null) {
    this._val = value;
    this._link = link;
  };
  get value () {return this._val;};
  get link () {return this._link;};
  set link (newLink) {this._link = newLink};
};

/*
returns an object instance of a node with private properties
similar to privateNodeFactory but more memory efficient
properties can only be accessed using the classes methods
*/
class privateNode {
  #val
  #link
  constructor (value, link = null) {
    this.#val = value;
    this.#link = link;
  };
  get value () {return this.#val;};
  set value (newValue) {this.#val = newValue;};
  get link () {return this.#link;};
  set link (newLink) {this.#link = newLink;};
};

/*
returns an object instance of a node with private properties, but no val setter
changing the nodes value requires orphaning the node and replacing it
*/
class privateNodeNO {
  #val
  #link
  constructor (value, link = null) {
    this.#val = value;
    this.#link = link;
  };
  get value () {return this.#val;};
  get link () {return this.#link};
  set link (newLink) {this.#link = newLink;};
};

export {
  basicNodeFactory,
  basicNodeFactoryNO,
  privateNodeFactory,
  privateNodeFactoryNO,
  immutableNodeFactory,
  basicNode,
  basicNodeNO,
  privateNode,
  privateNodeNO,
};