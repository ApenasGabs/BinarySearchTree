class Node {    
  constructor(value){
      if (!value) {
          throw "Value cannot be null"
      }else{
          this.value = value
      }
  }
}
