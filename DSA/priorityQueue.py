
import math


class PriorityQueue:
    def __init__(self):
        self.heap=[]
    
    def getLeftChildIndex(self,parentIndex):
        return parentIndex*2+1
    def getRightChildIndex(self,parentIndex):
        return parentIndex*2+2
    def getParentIndex(self,childIndex):
        return math.ceil(childIndex/2)-1
    def hasLeftChild(self,parentIndex):
        return self.getLeftChildIndex(parentIndex)<len(self.heap)
    def hasRightChild(self,parentIndex):
        return self.getRightChildIndex(parentIndex)<len(self.heap)
    def hasParent(self,childIndex):
        return self.getParentIndex(childIndex)>=0
    def getLeftChild(self,parentIndex):
        return self.heap[self.getLeftChildIndex(parentIndex)]
    def getRightChild(self,parentIndex):
        return self.heap[self.getRightChildIndex(parentIndex)]
    def getParent(self,childIndex):
        return self.heap[self.getParentIndex(childIndex)]
    def swap(self,frmIndex,toIndex):
        temp=self.heap[frmIndex]
        self.heap[frmIndex]=self.heap[toIndex]
        self.heap[toIndex]=temp
    def peek(self):
        if len(self.heap)==0:
            return None
        return self.heap[0]
    def maxHeapifyUp(self):
        cidx=len(self.heap)-1
        while self.hasParent(cidx) and self.getParent(cidx)<self.heap[cidx]:
            pIndx=self.getParentIndex(cidx)
            self.swap(cidx,pIndx)
            cidx=pIndx
    def maxHeapifyDown(self):
        pidx=0
        while True:
            if self.hasRightChild(pidx) and self.getRightChild(pidx)>self.heap[pidx]:
                cidx=self.getRightChildIndex(pidx)
                self.swap(pidx,cidx)
                pidx=cidx
            elif self.hasLeftChild(pidx) and self.getLeftChild(pidx)>self.heap[pidx]:
                cidx=self.getLeftChildIndex(pidx)
                self.swap(pidx,cidx)
                pidx=cidx
            else:
                break
    def minHeapifyUp(self):
        cidx=len(self.heap)-1
        while self.hasParent(cidx) and self.getParent(cidx)>self.heap[cidx]:
            pIndx=self.getParentIndex(cidx)
            self.swap(cidx,pIndx)
            cidx=pIndx
    def minHeapifyDown(self):
        pidx=0
        while True:
            if self.hasRightChild(pidx) and self.getRightChild(pidx)<self.heap[pidx]:
                cidx=self.getRightChildIndex(pidx)
                self.swap(pidx,cidx)
                pidx=cidx
            elif self.hasLeftChild(pidx) and self.getLeftChild(pidx)<self.heap[pidx]:
                cidx=self.getLeftChildIndex(pidx)
                self.swap(pidx,cidx)
                pidx=cidx
            else:
                break
            
    def add(self,value):
        self.heap.append(value)
        # self.maxHeapifyUp()
        self.minHeapifyUp()
    
    def remove(self):
        if len(self.heap)==0:
            return None
        removed=self.heap[0]
        self.heap[0]=self.heap[len(self.heap)-1]
        self.heap.pop()
        # self.maxHeapifyDown()
        self.minHeapifyDown()
        return removed
    
    

PriQueue = PriorityQueue()
 
# Adding the Elements
PriQueue.add(32)
PriQueue.add(45)
PriQueue.add(12)
PriQueue.add(65)
PriQueue.add(85)
 
print(PriQueue.heap)
print('peek',PriQueue.peek())
print('removed',PriQueue.remove())
print('peek',PriQueue.peek())
print('removed',PriQueue.remove())
print('peek',PriQueue.peek())
print('removed',PriQueue.remove())
print(PriQueue.heap)