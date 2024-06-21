
arr= [64, 25, 12, 22, 11]
def sort():
    for i in range(len(arr)):
        for j in range(i,len(arr)):
            if arr[i]>arr[j]:
                arr[i],arr[j]=arr[j],arr[i]
        
print('before sort',arr)
sort()
print('after sort',arr)