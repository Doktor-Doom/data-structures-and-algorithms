```ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Test Array
[8,4,23,42,16,15]

## The Breakdown..
> assuming the array isnt already a single value array(which we should account for what with edge cases and such)

> Take in the array finding the length and assigning it to [n].

> Per example we start at 8.

> Check that the value [n] is greater than 1, if it is then cast a dark spell.

> we divide [n] by 2 to find the middle of the array.

> each half of the array gets split using a splice() until single value arrays are left.

> starting again from the single value arrays, merge the subarrays so they are sorted, rinse and repeat creating a single sorted array.

## Efficiency

> BigO - (nlogn) <--- thats the voodoo i was talking about earlier.