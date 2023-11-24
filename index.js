class Node {
  constructor(value) {
    if (!value) {
      throw "Value cannot be null";
    } else {
      this.value = value;
    }
  }
}

// const MyNode = new Node('batata')

// console.log('MyNode: ', MyNode);

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      if (value < this.root.value) {
        if (!this.left) {
          this.left = new BinarySearchTree();
          this.left.insert(value);
        } else {
          this.left.insert(value);
        }
      }
      if (value > this.root.value) {
        if (!this.right) {
          this.right = new BinarySearchTree();
          this.right.insert(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  inOrder() {
    if (this.root) {
      if (this.left) {
        this.left.inOrder();
      }
      console.log(this.root.value);
    }
    if (this.right) {
      this.right.inOrder();
    }
  }

  decOrder() {
    if (this.root) {
      if (this.right) {
        this.right.decOrder();
      }
      console.log(this.root.value);
    }
    if (this.left) {
      this.left.decOrder();
    }
  }
}

const BST = new BinarySearchTree();

for (let index = 0; index < 10; index++) {
  BST.insert(Math.random().toFixed(2));
}
// BST.insert(2)
// BST.insert(1)
// BST.insert(3)
// BST.insert(4)
// BST.insert(5)
// BST.insert(-1)
// console.log('BST: ', JSON.stringify(BST));
BST.decOrder();
// BST.inOrder()
