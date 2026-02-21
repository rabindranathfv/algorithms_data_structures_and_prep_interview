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
    const node = new ListNode(value, this.head);
    this.head = node;
    this.size++;
  }

  /** Insert a node at the end. O(n) */
  append(value: T): void {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this.size++;
  }

  /** Remove the first node with the given value. O(n) */
  delete(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /** Return the index of the first node with the given value, or -1. O(n) */
  search(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  /** Convert the list to an array. O(n) */
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  get length(): number {
    return this.size;
  }
}
