package main

type Node struct {
	Left  *Node
	Right *Node
	Value int
}

func (node *Node) Insert(value int) {
	if node == nil {
		return
	}
	if node.Value > value {
		if node.Left == nil {
			node.Left = &Node{Value: value}
		} else {
			node.Left.Insert(value)
		}
	} else {
		if node.Right == nil {
			node.Right = &Node{Value: value}
		} else {
			node.Right.Insert(value)
		}
	}
}

func (node *Node) ascOrder() {
	if node == nil {
		return
	}
	if node.Left != nil {
		node.Left.ascOrder()
	}
	println(node.Value)
	if node.Right != nil {
		node.Right.ascOrder()
	}
}
func main() {
	root := &Node{Value: 10}
	root.Insert(5)
	root.Insert(15)
	root.Insert(8)
	root.Insert(3)
	root.Insert(2)
	root.Insert(18)
	root.ascOrder()
}
