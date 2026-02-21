/**
 * Binary Search
 *
 * Searches a **sorted** array by repeatedly halving the search range.
 *
 * Time Complexity:
 *   - Best:    O(1)       — target is the middle element
 *   - Average: O(log n)
 *   - Worst:   O(log n)
 *
 * Space Complexity: O(1) — iterative implementation
 *
 * @param arr    Sorted array of numbers
 * @param target Value to search for
 * @returns index of the target element, or -1 if not found
 */
export function binarySearch(arr: number[], target: number): number {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid]! < target) {
      first += mid;
    } else {
      last -= mid;
    }
  }

  return -1;
}
