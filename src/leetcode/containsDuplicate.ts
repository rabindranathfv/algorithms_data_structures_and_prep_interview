/**
 * LeetCode #217 — Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Given an integer array `nums`, return true if any value appears at least
 * twice. Return false if every element is distinct.
 *
 * Time Complexity:  O(n) — single pass with a Set
 * Space Complexity: O(n) — Set can store up to n elements
 *
 * Example:
 *   containsDuplicate([1, 2, 3, 1]) // true
 *   containsDuplicate([1, 2, 3, 4]) // false
 */
export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}
