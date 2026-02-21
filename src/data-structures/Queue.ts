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
    this.items.push(value);
  }

  /** Remove and return the front element. Returns undefined if empty. O(n) */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /** Return the front element without removing it. O(1) */
  peek(): T | undefined {
    return this.items[0];
  }

  /** Return true if the queue has no elements. O(1) */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  get size(): number {
    return this.items.length;
  }
}
