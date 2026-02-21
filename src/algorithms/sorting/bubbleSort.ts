/**
 * Bubble Sort
 *
 * Repeatedly swaps adjacent elements that are out of order.
 *
 * Time Complexity:
 *   - Best:    O(n)   — already sorted (with early-exit optimisation)
 *   - Average: O(n²)
 *   - Worst:   O(n²)
 *
 * Space Complexity: O(1) — in-place sort
 */
export function bubbleSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (result[j]! > result[j + 1]!) {
        [result[j], result[j + 1]] = [result[j + 1]!, result[j]!];
        swapped = true;
      }
    }

    // Early exit: array is already sorted
    if (!swapped) break;
  }

  return result;
}
