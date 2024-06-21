

ar= [64, 25, 12, 22, 11]

function merge(arr1,arr2){
    let i=0
    let j=0
    let result=[]
    while (i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j])
            j++;
        }
    }
    while (i<arr1.length){
        result.push(arr1[i])
        i++;
    }
    while (j<arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result
}

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2)
    return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid,arr.length)))
}

console.log('before sort',ar)
ar=mergeSort(ar)
console.log('after sort',ar)