class Node {    
  constructor(value){
      if (!value) {
          throw "Value cannot be null"
      }else{
          this.value = value
      }
  }
}

// const MyNode = new Node('batata')

// console.log('MyNode: ', MyNode);


class BinarySearchTree{
  constructor(){
    this.root = null
  }
  insert(value){
    if (this.root === null){
      this.root = new Node(value)
    } else{
      if(value < this.root.value){
        this.left = new Node(value)
        if (!this.left) {
          this.left = new BinarySearchTree()
          this.insert(value)
        } else {
          this.left.insert(value)
        }
      }
      if(value > this.root.value){
        this.right = new Node(value)
        if (!this.right) {
          this.right = new BinarySearchTree()
          this.right.insert(value)
        } else {
          this.insert(value)
        }
      }
    }
  }
}

const BTS = new BinarySearchTree()

BTS.insert(2)
BTS.insert(1)
BTS.insert(3)
console.log('BTS: ', BTS);