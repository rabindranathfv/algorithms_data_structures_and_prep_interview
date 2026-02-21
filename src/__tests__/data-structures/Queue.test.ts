import { Queue } from '../../data-structures/Queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('starts empty', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size).toBe(0);
  });

  it('enqueues and peeks elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size).toBe(2);
  });

  it('dequeues elements in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('isEmpty returns true after all elements are dequeued', () => {
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});
