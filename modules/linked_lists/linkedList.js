// building node class to use with linked lists.

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

let myNode = new privateNode(44);
console.log(myNode.value);

class linkedList {
  constructor (value = null) {
    this._headNode = new privateNode(value)
  };
  insertHead (newValue) {
    let newNode = new privateNode(newValue, this._headNode);
    this._headNode = newNode;
  };
  stringifyList () {
    let listString = "";
    let currentNode = this.headNode;
    while (currentNode) {
      listString += `${currentNode.value},\n`;
      currentNode = currentNode.link;
    };
    return listString;
  };
  get headNode () {return this._headNode};
};

let ll = new linkedList(5);
ll.insertHead(70);
ll.insertHead(5675);
ll.insertHead(90);
console.log(ll.stringifyList())