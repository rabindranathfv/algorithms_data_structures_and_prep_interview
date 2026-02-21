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
    // TODO: implement
  }

  /** Remove and return the top element. Returns undefined if empty. O(1) */
  pop(): T | undefined {
    // TODO: implement
    return undefined;
  }

  /** Return the top element without removing it. O(1) */
  peek(): T | undefined {
    // TODO: implement
    return undefined;
  }

  /** Return true if the stack has no elements. O(1) */
  isEmpty(): boolean {
    // TODO: implement
    return true;
  }

  get size(): number {
    return this.items.length;
  }
}
