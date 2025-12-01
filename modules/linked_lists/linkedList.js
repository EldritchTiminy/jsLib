// building node class to use with linked lists.

// copy-paste from nodes.js privateNode class
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
  stringifyList () {
    let listString = "";
    let currentNode = this.headNode;
    while (currentNode) {
      listString += `${currentNode.value},\n`;
      currentNode = currentNode.link;
    };
    return listString;
  };
  removeNode (removeVal) {
    let currentNode = this._headNode;
    if (currentNode.headNode === removeVal) {
      this._headNode = headNode.link;
    } else {
      while (currentNode.link.value != removeVal) {
        currentNode = currentNode.link;
      };
      currentNode.link = currentNode.link.link;
    };
  };
  get headNode () {return this._headNode};
  set headNode (newValue) {
    let newNode = new privateNode(newValue, this._headNode);
    this._headNode = newNode;
  };
};

let ll = new linkedList(5);
ll.headNode = 70;
ll.headNode = 5675;
ll.headNode = 90;
console.log(ll.stringifyList());
ll.removeNode(5675);
console.log(ll.stringifyList());