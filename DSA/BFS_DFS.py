
from collections import defaultdict
class Graph:
    def __init__(self):
        self.adjList=defaultdict(list)
    def addEdge(self,f,t):
        self.adjList[f].append(t)
    def BFS(self,s):
        visited=[False]*(max(self.adjList)+1)

        queue=[]
        visited[s]=True
        queue.append(s)
        while(queue):
            s=queue.pop(0)
            print(s,end=" ")

            for i in self.adjList[s]:
                if visited[i]==False:
                    visited[i]=True
                    queue.append(i)

    def DFSUtils(self,v,visited):
        print(v,end=" ")
        for i in self.adjList[v]:
            if i not in visited:
                visited.add(i)
                self.DFSUtils(i,visited)

    def DFS(self,s):
        visited=set()
        visited.add(s)
        self.DFSUtils(s,visited)
        


g = Graph()
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 2)
g.addEdge(2, 0)
g.addEdge(2, 3)
g.addEdge(3, 3)
 
print ("Following is Breadth First Traversal"
                " (starting from vertex 2)")
g.BFS(2)

print("\nFollowing is DFS from (starting from vertex 2)")
g.DFS(2)