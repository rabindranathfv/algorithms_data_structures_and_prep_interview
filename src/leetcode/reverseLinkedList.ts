/**
 * LeetCode #206 — Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Reverse a singly linked list in-place and return the new head.
 *
 * Time Complexity:  O(n) — visit each node once
 * Space Complexity: O(1) — iterative, constant extra space
 *
 * Example:
 *   1 → 2 → 3 → 4 → 5  becomes  5 → 4 → 3 → 2 → 1
 */

export class ListNode {
  constructor(
    public val: number,
    public next: ListNode | null = null,
  ) {}
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

/** Helper: build a linked list from an array */
export function arrayToList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]!);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]!);
    current = current.next;
  }
  return head;
}

/** Helper: convert a linked list to an array */
export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
