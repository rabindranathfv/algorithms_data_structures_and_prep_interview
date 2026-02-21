/**
 * Linear Search
 *
 * Iterates through each element until the target is found.
 *
 * Time Complexity:
 *   - Best:    O(1)  — target is the first element
 *   - Average: O(n)
 *   - Worst:   O(n)  — target is last or not present
 *
 * Space Complexity: O(1)
 *
 * @returns index of the target element, or -1 if not found
 */
export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
