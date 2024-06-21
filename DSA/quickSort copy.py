
arr= [10, 7, 8, 9, 1, 5 ]
# arr= [64, 25, 12, 22, 11]
def partition(i,j):
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
    if i>j: return
    p=partition(i,j)
    # print(arr,arr[i:p],arr[p],arr[p+1:j+1])
    quickSort(i,p-1)
    quickSort(p+1,j)

print('before sort',arr)
quickSort(0,len(arr)-1)
print('after sort',arr)