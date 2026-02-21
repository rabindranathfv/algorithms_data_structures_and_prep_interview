import { Stack } from '../../data-structures/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('starts empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size).toBe(0);
  });

  it('pushes and peeks elements', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size).toBe(2);
  });

  it('pops elements in LIFO order', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('isEmpty returns true after all elements are popped', () => {
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
