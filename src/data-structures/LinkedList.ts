/**
 * Singly Linked List
 *
 * A linear data structure where each node holds a value and a pointer to
 * the next node.
 *
 * Time Complexity:
 *   - prepend:    O(1)
 *   - append:     O(n)
 *   - delete:     O(n)
 *   - search:     O(n)
 *   - toArray:    O(n)
 *
 * Space Complexity: O(n)
 */

export class ListNode<T> {
  constructor(
    public value: T,
    public next: ListNode<T> | null = null,
  ) {}
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private size: number = 0;

  /** Insert a node at the beginning. O(1) */
  prepend(value: T): void {
    // TODO: implement
  }

  /** Insert a node at the end. O(n) */
  append(value: T): void {
    // TODO: implement
  }

  /** Remove the first node with the given value. O(n) */
  delete(value: T): boolean {
    // TODO: implement
    return false;
  }

  /** Return the index of the first node with the given value, or -1. O(n) */
  search(value: T): number {
    // TODO: implement
    return -1;
  }

  /** Convert the list to an array. O(n) */
  toArray(): T[] {
    // TODO: implement
    return [];
  }

  get length(): number {
    return this.size;
  }
}
