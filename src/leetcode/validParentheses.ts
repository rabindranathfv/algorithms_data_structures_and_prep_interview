/**
 * LeetCode #20 — Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string containing only the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * A string is valid if:
 *   - Every open bracket is closed by the same type of bracket.
 *   - Open brackets are closed in the correct order.
 *   - Every close bracket has a corresponding open bracket.
 *
 * Time Complexity:  O(n) — single pass through the string
 * Space Complexity: O(n) — stack can hold up to n/2 elements
 *
 * Examples:
 *   isValid("()")      // true
 *   isValid("()[]{}")  // true
 *   isValid("(]")      // false
 */
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const closeToOpen: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char in closeToOpen) {
      if (stack.pop() !== closeToOpen[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
