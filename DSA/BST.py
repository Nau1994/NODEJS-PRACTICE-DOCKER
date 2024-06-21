
class Node:
    def __init__(self,data):
        self.data=data
        self.left=None
        self.right=None

class BinarySearchTree:
    def __init__(self):
        self.root=None
    def getRootNode(self):
        return self.root
    def inorder(self,r):
        if r is not None:
            self.inorder(r.left)
            print(r.data,end=" ")
            self.inorder(r.right)
    def preorder(self,r):
        if r is not None:
            print(r.data,end=" ")
            self.inorder(r.left)
            self.inorder(r.right)
    def postorder(self,r):
        if r is not None:
            self.inorder(r.left)
            self.inorder(r.right)
            print(r.data,end=" ")
    def insert(self,value):
        valueNode=Node(value)
        rootNode=self.root
        if(self.root is None):
            self.root=valueNode
        else:
            self.insertNode(rootNode,valueNode)

    def insertNode(self,rootNode,newNode):
        if rootNode.data<newNode.data:
            if rootNode.right is None:
                rootNode.right=newNode
            else:
                self.insertNode(rootNode.right,newNode)
        else:
            if rootNode.left is None:
                rootNode.left=newNode
            else:
                self.insertNode(rootNode.left,newNode)
    
    def remove(self,value):
        rootNode=self.root
        if(self.root is None):
            return None
        else:
            self.removeNode(rootNode,value)

    def removeNode(self,rootNode,value):
        if rootNode.data<value:
            if rootNode.right is None:
                return None
            else:
                self.removeNode(rootNode.right,value)
        elif rootNode.data>value:
            if rootNode.left is None:
                return None
            else:
                self.removeNode(rootNode.left,value)
        else:
            if rootNode.right is None and rootNode.left is None:
                aux=rootNode.data
                rootNode=None
                return rootNode
            if rootNode.right is None:
                aux=rootNode.data
                rootNode=rootNode.left
                return rootNode
            if rootNode.left is None:
                aux=rootNode.data
                rootNode=rootNode.right
                return rootNode
            
            minNode=self.findMinNode(rootNode.right)
            rootNode.data=minNode.data
            rootNode.right=self.removeNode(rootNode.right,value)
            return rootNode
    
    def findMinNode(self,node):
        if node.left is None:
            return node
        else:
            return self.findMinNode(node.left)
    

           

BST =BinarySearchTree()
 
# Inserting nodes to the BinarySearchTree
BST.insert(15)
BST.insert(25)
BST.insert(10)
BST.insert(7)
BST.insert(22)
BST.insert(17)
BST.insert(13)
BST.insert(5)
BST.insert(9)
BST.insert(27)

root = BST.getRootNode()

print("Initial tree: ")
BST.inorder(root)

BST.remove(5)
root = BST.getRootNode()
             
print("Tree after removing 5: ")

BST.remove(7)
root = BST.getRootNode()
print("Tree after removing 7: ")
BST.inorder(root)

BST.remove(15)

root = BST.getRootNode()
print("Inorder traversal: ")
BST.inorder(root)
BST.postorder(root)
BST.preorder(root)