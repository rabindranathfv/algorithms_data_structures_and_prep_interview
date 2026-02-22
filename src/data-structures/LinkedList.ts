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
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.size++;
  }

  /** Insert a node at the end. O(n) */
  append(value: T): void {
    let current = this.head;
    if (!current) {
      this.prepend(value);
      return;
    }

    while (current) {
      if (current.next === null) {
        current.next = new ListNode(value);
        this.size++;
        return;
      }
      current = current.next;
    }
  }

  /** Remove the first node with the given value. O(n) */
  delete(value: T): boolean {
    let current = this.head;
    let previous: ListNode<T> | null = null;

    if (!current) return false;

    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
          current.next = null;
        } else {
          this.head = current.next;
          current.next = null;
        }
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  /** Return the index of the first node with the given value, or -1. O(n) */
  search(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  /** Convert the list to an array. O(n) */
  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  get length(): number {
    return this.size;
  }
}
