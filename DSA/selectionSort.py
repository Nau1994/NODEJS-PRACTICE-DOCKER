
arr= [64, 25, 12, 22, 11]
def sort():
    for i in range(len(arr)):
        min=i
        for j in range(i+1,len(arr)):
            if arr[min]>arr[j]:
                min=j
        arr[i],arr[min]=arr[min],arr[i]
print('before sort',arr)
sort()
print('after sort',arr)