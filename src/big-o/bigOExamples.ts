/**
 * Big-O Notation — Time & Space Complexity Examples
 *
 * This module illustrates common complexity classes with simple, concrete
 * functions so that each class is easy to understand at a glance.
 */

// ---------------------------------------------------------------------------
// O(1) — Constant Time
// ---------------------------------------------------------------------------

/**
 * Return the first element of an array.
 * No matter how large the array is, we always execute exactly one operation.
 *
 * Time:  O(1)
 * Space: O(1)
 */
export function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// ---------------------------------------------------------------------------
// O(log n) — Logarithmic Time
// ---------------------------------------------------------------------------

/**
 * Count how many times n can be halved before reaching 1.
 * Models the depth of a binary search or balanced BST operation.
 *
 * Time:  O(log n)
 * Space: O(1)
 */
export function countHalvings(n: number): number {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}

// ---------------------------------------------------------------------------
// O(n) — Linear Time
// ---------------------------------------------------------------------------

/**
 * Return the sum of all elements in an array.
 * We visit every element exactly once.
 *
 * Time:  O(n)
 * Space: O(1)
 */
export function sumArray(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

// ---------------------------------------------------------------------------
// O(n log n) — Linearithmic Time
// ---------------------------------------------------------------------------

/**
 * Sort an array using the built-in sort (typically TimSort — O(n log n)).
 *
 * Time:  O(n log n)
 * Space: O(log n) to O(n) depending on the engine implementation
 */
export function linearithmicSort(arr: number[]): number[] {
  return [...arr].sort((a, b) => a - b);
}

// ---------------------------------------------------------------------------
// O(n²) — Quadratic Time
// ---------------------------------------------------------------------------

/**
 * Return all pairs of elements from the array.
 * For every element we iterate over every other element — two nested loops.
 *
 * Time:  O(n²)
 * Space: O(n²) — stores all pairs
 */
export function allPairs(arr: number[]): [number, number][] {
  const pairs: [number, number][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i]!, arr[j]!]);
    }
  }
  return pairs;
}

// ---------------------------------------------------------------------------
// O(2ⁿ) — Exponential Time
// ---------------------------------------------------------------------------

/**
 * Compute the n-th Fibonacci number using naive recursion.
 * Each call spawns two more calls, doubling the work at every level.
 *
 * Time:  O(2ⁿ)
 * Space: O(n)  — maximum recursion depth
 *
 * NOTE: Use dynamic programming (memoisation) for an O(n) solution.
 */
export function fibonacciExponential(n: number): number {
  if (n <= 1) return n;
  return fibonacciExponential(n - 1) + fibonacciExponential(n - 2);
}

// ---------------------------------------------------------------------------
// O(n) Space — Linear Space
// ---------------------------------------------------------------------------

/**
 * Compute the n-th Fibonacci number using memoisation.
 *
 * Time:  O(n)
 * Space: O(n) — memo table
 */
export function fibonacciMemo(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;
  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}
