import { twoSum } from '../../leetcode/twoSum';
import { isValid } from '../../leetcode/validParentheses';
import {
  reverseList,
  arrayToList,
  listToArray,
} from '../../leetcode/reverseLinkedList';
import { maxProfit } from '../../leetcode/bestTimeToBuyAndSellStock';
import { containsDuplicate } from '../../leetcode/containsDuplicate';

// ---------------------------------------------------------------------------
// #1 — Two Sum
// ---------------------------------------------------------------------------
describe('twoSum', () => {
  it('returns correct indices for a basic case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('works when the answer is not the first two elements', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('handles negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });
});

// ---------------------------------------------------------------------------
// #20 — Valid Parentheses
// ---------------------------------------------------------------------------
describe('isValid', () => {
  it('returns true for valid strings', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[]}')).toBe(true);
  });

  it('returns false for invalid strings', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isValid('')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// #206 — Reverse Linked List
// ---------------------------------------------------------------------------
describe('reverseList', () => {
  it('reverses a linked list', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    expect(listToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
  });

  it('handles a single-node list', () => {
    const head = arrayToList([1]);
    expect(listToArray(reverseList(head))).toEqual([1]);
  });

  it('handles null input', () => {
    expect(reverseList(null)).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// #121 — Best Time to Buy and Sell Stock
// ---------------------------------------------------------------------------
describe('maxProfit', () => {
  it('returns the maximum profit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it('returns 0 when no profit is possible', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([5])).toBe(0);
    expect(maxProfit([])).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// #217 — Contains Duplicate
// ---------------------------------------------------------------------------
describe('containsDuplicate', () => {
  it('returns true when a duplicate exists', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it('returns false when all elements are distinct', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([])).toBe(false);
  });
});
