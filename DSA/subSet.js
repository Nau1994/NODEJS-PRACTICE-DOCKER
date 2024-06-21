const st ="abc"
const subSet=[]
const subSeq=[]

function getSubSet(o,sb){
    //base case
    if(st.length==o){
        subSet.push(sb)
        return
    }
    //rec case
    getSubSet(o+1,sb+st[o])
    getSubSet(o+1,sb)

}

function getSubSeq(o,sb){
    //base case
    if(st.length==o){
        // subSeq.push(sb)
        return
    }
    //rec case
   
    getSubSeq(o+1,sb+st[o])
    getSubSeq(o+1,st[o])

}

getSubSet(0,"")
getSubSeq(0,"")

console.log(subSet)
console.log(subSeq)