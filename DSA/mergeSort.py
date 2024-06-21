
import math


ar= [64, 25, 12, 22, 11]

def merge(arr1,arr2):
    i,j=0,0
    result=[]
    while i<len(arr1) and j<len(arr2):
        
        if arr1[i]<=arr2[j]:
            result.append(arr1[i])
            i+=1
        else:
            result.append(arr2[j])
            j+=1

    while i<len(arr1):
        result.append(arr1[i])
        i+=1

    while j<len(arr2):
        result.append(arr2[j])
        j+=1
    return result

def mergeSort(arr):
    if len(arr)<=1: return arr
    mid=math.floor(len(arr)/2)
    return merge(mergeSort(arr[:mid]),mergeSort(arr[mid:]))

print('before sort',ar)
ar=mergeSort(ar)
print('after sort',ar)