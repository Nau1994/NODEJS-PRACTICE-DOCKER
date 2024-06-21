
arr= [64, 25, 12, 22, 11]
def sort():
    count=0
    for i in range(1,len(arr)):
        min=arr[i]
        for j in range(0,i):
            count+=1
            if arr[i-j]>=arr[i-j-1]:
                break
            else:
                arr[i-j]=arr[i-j-1]
            arr[i-j-1]=min

    print("count",count)

print('before sort',arr)
sort()
print('after sort',arr)