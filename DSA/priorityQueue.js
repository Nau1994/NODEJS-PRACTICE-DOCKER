

class PriorityQueue{
    constructor(){
        this.heap=[]
    }

     getLeftChildIndex(parentIndex){
        return parentIndex*2+1}
     getRightChildIndex(parentIndex){
        return parentIndex*2+2}
     getParentIndex(childIndex){
        return Math.ceil(childIndex/2)-1}
     hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex)<this.heap.length}
     hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex)<this.heap.length}
     hasParent(childIndex){
        return this.getParentIndex(childIndex)>=0}
     getLeftChild(parentIndex){
        return this.heap[this.getLeftChildIndex(parentIndex)]}
     getRightChild(parentIndex){
        return this.heap[this.getRightChildIndex(parentIndex)]}
     getParent(childIndex){
        return this.heap[this.getParentIndex(childIndex)]}
     swap(frmIndex,toIndex){
        let temp=this.heap[frmIndex]
        this.heap[frmIndex]=this.heap[toIndex]
        this.heap[toIndex]=temp}
     peek(){
        if (this.heap.length==0){
            return null
        }
        return this.heap[0]
    }
     maxHeapifyUp(){
        let cidx=this.heap.length-1
        while (this.hasParent(cidx) && this.getParent(cidx)<this.heap[cidx]){
            let pIndx=this.getParentIndex(cidx)
            this.swap(cidx,pIndx)
            cidx=pIndx
        }
        }
     maxHeapifyDown(){
        let pidx=0
        while (true){
            if (this.hasRightChild(pidx) && this.getRightChild(pidx)>this.heap[pidx]){
                let cidx=this.getRightChildIndex(pidx)
                this.swap(pidx,cidx)
                pidx=cidx
            }
            else if (this.hasLeftChild(pidx) && this.getLeftChild(pidx)>this.heap[pidx]){
                let cidx=this.getLeftChildIndex(pidx)
                this.swap(pidx,cidx)
                pidx=cidx
            }
            else{
                break
            }
        }
    }
     minHeapifyUp(){
        let cidx=this.heap.length-1
        while (this.hasParent(cidx) && this.getParent(cidx)>this.heap[cidx]){
            let pIndx=this.getParentIndex(cidx)
            this.swap(cidx,pIndx)
            cidx=pIndx
        }
    }
     minHeapifyDown(){
        let pidx=0
        while (true){
            if (this.hasRightChild(pidx) && this.getRightChild(pidx)<this.heap[pidx]){
                let cidx=this.getRightChildIndex(pidx)
                this.swap(pidx,cidx)
                pidx=cidx
            }
            else if (this.hasLeftChild(pidx) && this.getLeftChild(pidx)<this.heap[pidx]){
                let cidx=this.getLeftChildIndex(pidx)
                this.swap(pidx,cidx)
                pidx=cidx
            }
            else{
                break
            }
        }
    }
            
     add(value){
        this.heap.push(value)
        // this.maxHeapifyUp()
        this.minHeapifyUp()
    }
    
     remove(){
        if (this.heap.length==0){
            return null}
        let removed=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        //  this.maxHeapifyDown()
        this.minHeapifyDown()
        return removed
        }
    
}


PriQueue = new PriorityQueue()
 
// # Adding the Elements
PriQueue.add(32)
PriQueue.add(45)
PriQueue.add(12)
PriQueue.add(65)
PriQueue.add(85)
 
console.log(PriQueue.heap)
console.log('peek',PriQueue.peek())
console.log('removed',PriQueue.remove())
console.log('peek',PriQueue.peek())
console.log('removed',PriQueue.remove())
console.log('peek',PriQueue.peek())
console.log('removed',PriQueue.remove())
console.log(PriQueue.heap)