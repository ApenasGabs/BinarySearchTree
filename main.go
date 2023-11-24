package main

type Node struct {
	Left  *Node
	Right *Node
	Value int
}

func (root *Node) Insert(value int) {
	if root == nil {
		return
	}
	if root.Value < value {
		if root.Left == nil {
			root.Left = &Node{Value: value}
		} else {
			root.Left.Insert(value)
		}
	} else {
		if root.Right == nil {
			root.Right = &Node{Value: value}
		} else {
			root.Right.Insert(value)
		}
	}
}

func main() {

}
