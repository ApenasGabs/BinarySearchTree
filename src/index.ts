class MyNode {
  value: number;
  constructor(value: number) {
    if (!value) {
      throw "Value cannot be null";
    } else {
      this.value = value;
    }
  }
}

class BinarySearchTree {
  root: MyNode | null;
  left: BinarySearchTree | null;
  right: BinarySearchTree | null;
  constructor() {
    this.root = null;
    this.left = null;
    this.right = null;
  }
  insert(value: number) {
    if (this.root === null) {
      this.root = new MyNode(value);
    } else {
      if (value < this.root.value) {
        if (!this.left) {
          this.left = new BinarySearchTree();
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
  ascOrder() {
    if (this.root) {
      if (this.left) {
        this.left.ascOrder();
      }
      console.log(this.root.value);
    }
    if (this.right) {
      this.right.ascOrder();
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

BST.insert(1);
BST.insert(3);
BST.insert(-1);
BST.insert(5);
BST.decOrder();
