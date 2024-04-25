# Sorting Algorithms

Sorting is a process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order

## Why Sorting algorithms ?

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

- Worst-case time complexity: O(n^2). Worst case occurs when array is reverse sorted.
- Best-case time complexity: O(n). Best case occurs when array is already sorted.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Bubble Sort is the simplicity of the algorithm. It's easy to understand and implement. However, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Bubble Sort. Example](/Sorting-Algorithm/bubbleSort.js)

## Selection Sort

Selection Sort is a simple sorting algorithm. This algorithm divides the input into a sorted and an unsorted region. The sorted region is built up by repeatedly selecting the smallest (or largest, depending on the ordering) element of the unsorted region and swapping it with the leftmost unsorted element, moving the boundary of the sorted region one element to the right.

- Worst-case time complexity: O(n^2). Worst case occurs when array is sorted in reverse order.
- Best-case time complexity: O(n^2). Best case occurs when array is already sorted. Even in the best case, it makes n^2 comparisons.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Selection Sort is its simplicity and the fact that it performs well on small lists. However, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Selection Sort. Example](/Sorting-Algorithm/selectionSort.js)

## Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

- Worst-case time complexity: O(n^2). Worst case occurs when array is reverse sorted.
- Best-case time complexity: O(n). Best case occurs when array is already sorted.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Insertion Sort is its simplicity. It also performs well for small lists or for lists that are already partially sorted. However, like Bubble Sort, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Insertion Sort. Example](/Sorting-Algorithm/insertionSort.js)
