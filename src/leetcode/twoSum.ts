/**
 * LeetCode #1 — Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers `nums` and an integer `target`, return the
 * indices of the two numbers that add up to `target`.
 *
 * You may assume exactly one solution exists, and the same element cannot
 * be used twice.
 *
 * Time Complexity:  O(n) — single pass with a hash map
 * Space Complexity: O(n) — hash map stores up to n entries
 *
 * Example:
 *   twoSum([2, 7, 11, 15], 9) // [0, 1]
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i]!, i);
  }

  return []; // no solution found (problem guarantees one exists)
}
