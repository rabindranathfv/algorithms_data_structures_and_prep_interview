/**
 * Queue (FIFO — First In, First Out)
 *
 * Time Complexity:
 *   - enqueue:  O(1)
 *   - dequeue:  O(n)  — due to array shift; use a linked-list queue for O(1)
 *   - peek:     O(1)
 *   - isEmpty:  O(1)
 *
 * Space Complexity: O(n)
 */
export class Queue<T> {
  private items: T[] = [];

  /** Add an element to the back of the queue. O(1) */
  enqueue(value: T): void {
    // TODO: implement
  }

  /** Remove and return the front element. Returns undefined if empty. O(n) */
  dequeue(): T | undefined {
    // TODO: implement
    return undefined;
  }

  /** Return the front element without removing it. O(1) */
  peek(): T | undefined {
    // TODO: implement
    return undefined;
  }

  /** Return true if the queue has no elements. O(1) */
  isEmpty(): boolean {
    // TODO: implement
    return true;
  }

  get size(): number {
    return this.items.length;
  }
}
