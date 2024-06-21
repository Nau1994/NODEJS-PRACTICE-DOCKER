class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class Graph:
    def __init__(self,noOfVertes):
        self.noOfVertes = noOfVertes
        self.adjList=[None]*noOfVertes
    def add_edge(self,frm,to):
        frmNode=Node(frm)
        toNode=Node(to)
        frmNode.next=self.adjList[to]
        self.adjList[to]=frmNode

        
        toNode.next=self.adjList[frm]
        self.adjList[frm]=toNode

    def print_graph(self):
        for i in range(self.noOfVertes):
            print('vertex head',i,end="")
            temp=self.adjList[i]
            while temp:
                print("-> {}".format(temp.data),end="")
                temp=temp.next
            print('\n')

if __name__ == "__main__":
    V = 5
    graph = Graph(V)
    graph.add_edge(0, 1)
    graph.add_edge(0, 4)
    graph.add_edge(1, 2)
    graph.add_edge(1, 3)
    graph.add_edge(1, 4)
    graph.add_edge(2, 3)
    graph.add_edge(3, 4)
 
    graph.print_graph()