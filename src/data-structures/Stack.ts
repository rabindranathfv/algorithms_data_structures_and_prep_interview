/**
 * Stack (LIFO — Last In, First Out)
 *
 * Time Complexity:
 *   - push:    O(1)
 *   - pop:     O(1)
 *   - peek:    O(1)
 *   - isEmpty: O(1)
 *
 * Space Complexity: O(n)
 */
export class Stack<T> {
  private items: T[] = [];

  /** Add an element to the top of the stack. O(1) */
  push(value: T): void {
    this.items.push(value);
  }

  /** Remove and return the top element. Returns undefined if empty. O(1) */
  pop(): T | undefined {
    return this.items.pop();
  }

  /** Return the top element without removing it. O(1) */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /** Return true if the stack has no elements. O(1) */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  get size(): number {
    return this.items.length;
  }
}
