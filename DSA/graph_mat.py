
class Graph:
    def __init__(self,numOfVertices):
        self.numOfVertices = numOfVertices
        self.adjMat=[[-1]*numOfVertices for x in range(numOfVertices)]
        self.vertIdx={}
        self.vertList=[0]*numOfVertices
    def set_vertex(self,vidx,vertex):
        self.vertIdx[vertex]=vidx
        self.vertList[vidx]=vertex
    def set_edge(self,frm,to,cost=0):
        frm=self.vertIdx[frm]
        to=self.vertIdx[to]
        self.adjMat[frm][to]=cost
        self.adjMat[to][frm]=cost
    def get_vertex(self):
        return self.vertList
    def get_edges(self):
        edges=[]
        for i in range(self.numOfVertices):
            for j in range(self.numOfVertices):
                if self.adjMat[i][j]!=-1:
                    edges.append((self.vertList[i],self.vertList[j],self.adjMat[i][j]))
        return edges
    def get_matrix(self):
        return self.adjMat

G =Graph(6)
G.set_vertex(0,'a')
G.set_vertex(1,'b')
G.set_vertex(2,'c')
G.set_vertex(3,'d')
G.set_vertex(4,'e')
G.set_vertex(5,'f')
G.set_edge('a','e',10)
G.set_edge('a','c',20)
G.set_edge('c','b',30)
G.set_edge('b','e',40)
G.set_edge('e','d',50)
G.set_edge('f','e',60)
 
print("Vertices of Graph")
print(G.get_vertex())
 
print("Edges of Graph")
print(G.get_edges())
 
print("Adjacency Matrix of Graph")
print(G.get_matrix())