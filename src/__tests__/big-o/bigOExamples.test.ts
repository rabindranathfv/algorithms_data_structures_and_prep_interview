import {
  getFirstElement,
  countHalvings,
  sumArray,
  linearithmicSort,
  allPairs,
  fibonacciExponential,
  fibonacciMemo,
} from '../../big-o/bigOExamples';

describe('getFirstElement — O(1)', () => {
  it('returns the first element', () => {
    expect(getFirstElement([1, 2, 3])).toBe(1);
  });

  it('returns undefined for an empty array', () => {
    expect(getFirstElement([])).toBeUndefined();
  });
});

describe('countHalvings — O(log n)', () => {
  it('counts halvings correctly', () => {
    expect(countHalvings(1)).toBe(0);
    expect(countHalvings(2)).toBe(1);
    expect(countHalvings(8)).toBe(3);
    expect(countHalvings(1024)).toBe(10);
  });
});

describe('sumArray — O(n)', () => {
  it('returns the sum of all elements', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  it('returns 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });
});

describe('linearithmicSort — O(n log n)', () => {
  it('sorts an array in ascending order', () => {
    expect(linearithmicSort([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it('does not mutate the original array', () => {
    const original = [3, 1, 2];
    linearithmicSort(original);
    expect(original).toEqual([3, 1, 2]);
  });
});

describe('allPairs — O(n²)', () => {
  it('returns all unique pairs', () => {
    expect(allPairs([1, 2, 3])).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  it('returns an empty array for fewer than 2 elements', () => {
    expect(allPairs([1])).toEqual([]);
    expect(allPairs([])).toEqual([]);
  });
});

describe('fibonacciExponential — O(2ⁿ)', () => {
  it('computes Fibonacci numbers correctly', () => {
    expect(fibonacciExponential(0)).toBe(0);
    expect(fibonacciExponential(1)).toBe(1);
    expect(fibonacciExponential(10)).toBe(55);
  });
});

describe('fibonacciMemo — O(n)', () => {
  it('computes Fibonacci numbers correctly', () => {
    expect(fibonacciMemo(0)).toBe(0);
    expect(fibonacciMemo(1)).toBe(1);
    expect(fibonacciMemo(10)).toBe(55);
    expect(fibonacciMemo(40)).toBe(102334155);
  });
});
