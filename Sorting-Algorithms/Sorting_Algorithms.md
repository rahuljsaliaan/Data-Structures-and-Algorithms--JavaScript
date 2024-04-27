# Sorting Algorithms

Sorting is a process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order

## Why Sorting algorithms ?

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

---

## Beginner Sorting Algorithms: Bubble Sort, Selection Sort, and Insertion Sort

Bubble, Selection, and Insertion Sort are beginner sorting algorithms. They're simple and great for learning, but not efficient for large data sets due to their O(n^2) time complexity. For larger data sets, more efficient algorithms like QuickSort, MergeSort, or HeapSort are preferred. Always choose the sorting algorithm based on your specific needs and data set characteristics.

## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

- Worst-case time complexity: O(n^2). Worst case occurs when array is reverse sorted.
- Best-case time complexity: O(n). Best case occurs when array is already sorted.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Bubble Sort is the simplicity of the algorithm. It's easy to understand and implement. However, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Bubble Sort. Example](/Sorting-Algorithms/bubbleSort.js)

## Selection Sort

Selection Sort is a simple sorting algorithm. This algorithm divides the input into a sorted and an unsorted region. The sorted region is built up by repeatedly selecting the smallest (or largest, depending on the ordering) element of the unsorted region and swapping it with the leftmost unsorted element, moving the boundary of the sorted region one element to the right.

- Worst-case time complexity: O(n^2). Worst case occurs when array is sorted in reverse order.
- Best-case time complexity: O(n^2). Best case occurs when array is already sorted. Even in the best case, it makes n^2 comparisons.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Selection Sort is its simplicity and the fact that it performs well on small lists. However, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Selection Sort. Example](/Sorting-Algorithms/selectionSort.js)

## Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

- Worst-case time complexity: O(n^2). Worst case occurs when array is reverse sorted.
- Best-case time complexity: O(n). Best case occurs when array is already sorted.
- Average time complexity: O(n^2).
- Space complexity: O(1). It's a constant space, in-place sorting algorithm.

The main advantage of Insertion Sort is its simplicity. It also performs well for small lists or for lists that are already partially sorted. However, like Bubble Sort, it's not suitable for large data sets as its average and worst-case time complexity are quite high compared to other sorting algorithms like QuickSort, MergeSort, etc.

[Insertion Sort. Example](/Sorting-Algorithms/insertionSort.js)

---

## Intermediatory Sorting Algorithms: Merge Sort, Quick Sort, and Radix Sort

Merge Sort, Quick Sort, and Radix Sort are intermediate level sorting algorithms. They are more complex than beginner algorithms but offer better performance, especially on larger data sets.

## Merge Sort

Merge Sort is an efficient, stable sorting algorithm that makes use of the divide and conquer strategy. It divides the unsorted list into N sub-lists, each containing one element, and then repeatedly merges sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.

- Worst-case time complexity: O(n log n). Worst case occurs when the array is in reverse order.
- Best-case time complexity: O(n log n). Best case occurs when the array is already sorted.
- Average time complexity: O(n log n).
- Space complexity: O(n). It requires additional space for the auxiliary array used during merge operation.

The main advantage of Merge Sort is its predictable time complexity behavior. It performs well for any type of data and its performance doesn't degrade with large data sets. However, it requires additional space which can be a limiting factor if memory is a concern.

[Merge Sort. Example](/Sorting-Algorithms/mergeSort.js)

## Quick Sort

Quick Sort is a highly efficient sorting algorithm and is based on the partitioning of an array of data into smaller arrays. A large array is partitioned into two arrays, one of which holds values smaller than the specified value, say pivot, based on which the partition is made, and another array holds values greater than the pivot value.

- Worst-case time complexity: O(n^2). Worst case occurs when the array is already sorted or in reverse order.
- Best-case time complexity: O(n log n). Best case occurs when the pivot element is always the middle element or near the middle element.
- Average time complexity: O(n log n).
- Space complexity: O(log n). It requires less space as it works in place by swapping elements.

The main advantage of Quick Sort is its ability to sort in-place, meaning it doesn't require additional space like Merge Sort. It's also faster in practice than other O(n log n) algorithms for most inputs. However, its worst-case performance is poor, and it's not a stable sort.

[Quick Sort. Example](/Sorting-Algorithms/quickSort.js)
