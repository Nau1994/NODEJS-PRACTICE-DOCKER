
import math


arr= [10, 7, 8, 9, 1, 5 ]
# arr= [64, 25, 12, 22, 11]
def partition(s,e):
    p=arr[e]
    k=s-1
    for i in range(s,e):
        if arr[i]<p:
            k+=1
            arr[k],arr[i]=arr[i],arr[k]
    
    arr[k+1],arr[e]=arr[e],arr[k+1]
    return k+1

def partition2(s,e):
    p=arr[s]
    k=s
    for i in range(s+1,e+1):
        if arr[i]<p:
            k+=1
            arr[k],arr[i]=arr[i],arr[k]
    arr[k],arr[s]=arr[s],arr[k]
    return k

def partition3(i,j):
    p=i
    k=i
    while k<=j:
        if arr[p]>arr[k]:
            arr[p],arr[k]=arr[k],arr[p]
            p,k=p,k
        else:
            k+=1

    return p

def quickSort(i,j):
    if i>=j: return
    p=partition(i,j)
    # print(arr,arr[i:p],arr[p],arr[p+1:j+1])
    quickSort(i,p-1)
    quickSort(p+1,j)


print('before sort',arr)
quickSort(0,len(arr)-1)
print('after sort',arr)