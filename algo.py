import random

def bubbleSort(ar):
    n = len(ar)
    # Traverse through all array elements
    for i in range(n):
    # Last i elements are already in correct position
        for j in range(0, n-i-1):
            # Swap if the element found is greater than the next element
            if ar[j] > ar[j+1] :
                ar[j], ar[j+1] = ar[j+1], ar[j]
    return ar

# Driver code to test above
ar = []
for i in range(10):
    ar.append(random.randint(1, 10))
print(ar)

bubbleSort(ar)
print ("Sorted array is:")
# print(bubbleSort(ar))
for i in range(len(ar)):
    print (ar[i])