import { linearSearch } from '../../algorithms/searching/linearSearch';
import { binarySearch } from '../../algorithms/searching/binarySearch';

describe('linearSearch', () => {
  const arr = [10, 30, 50, 70, 90];

  it('returns the index when the target is present', () => {
    expect(linearSearch(arr, 50)).toBe(2);
    expect(linearSearch(arr, 10)).toBe(0);
    expect(linearSearch(arr, 90)).toBe(4);
  });

  it('returns -1 when the target is not present', () => {
    expect(linearSearch(arr, 100)).toBe(-1);
  });

  it('returns -1 for an empty array', () => {
    expect(linearSearch([], 5)).toBe(-1);
  });
});

describe('binarySearch', () => {
  const sorted = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  it('returns the index when the target is present', () => {
    expect(binarySearch(sorted, 10)).toBe(0);
    expect(binarySearch(sorted, 60)).toBe(5);
    expect(binarySearch(sorted, 100)).toBe(9);
  });

  it('returns -1 when the target is not present', () => {
    expect(binarySearch(sorted, 55)).toBe(-1);
  });

  it('returns -1 for an empty array', () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it('handles a single-element array — found', () => {
    expect(binarySearch([42], 42)).toBe(0);
  });

  it('handles a single-element array — not found', () => {
    expect(binarySearch([42], 1)).toBe(-1);
  });
});
