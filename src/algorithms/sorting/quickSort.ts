/**
 * Quick Sort
 *
 * Selects a pivot element and partitions the array into elements less than
 * and greater than the pivot, then recursively sorts each partition.
 *
 * Time Complexity:
 *   - Best:    O(n log n) — balanced partitions
 *   - Average: O(n log n)
 *   - Worst:   O(n²)      — already sorted array with last-element pivot
 *
 * Space Complexity: O(log n) — recursive call stack
 */
export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]!;
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i]! <= pivot) {
      left.push(arr[i]!);
    } else {
      right.push(arr[i]!);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
