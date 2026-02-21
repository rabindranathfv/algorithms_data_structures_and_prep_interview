import { LinkedList } from '../../data-structures/LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe('append', () => {
    it('adds elements to the end', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('prepend', () => {
    it('adds elements to the beginning', () => {
      list.prepend(3);
      list.prepend(2);
      list.prepend(1);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('delete', () => {
    it('removes an existing value and returns true', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.delete(2)).toBe(true);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it('removes the head correctly', () => {
      list.append(1);
      list.append(2);
      list.delete(1);
      expect(list.toArray()).toEqual([2]);
    });

    it('returns false when the value is not found', () => {
      list.append(1);
      expect(list.delete(99)).toBe(false);
    });

    it('returns false on an empty list', () => {
      expect(list.delete(1)).toBe(false);
    });
  });

  describe('search', () => {
    it('returns the index of an existing value', () => {
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.search(20)).toBe(1);
    });

    it('returns -1 when the value is not found', () => {
      list.append(10);
      expect(list.search(99)).toBe(-1);
    });
  });

  describe('length', () => {
    it('tracks the number of elements', () => {
      expect(list.length).toBe(0);
      list.append(1);
      list.append(2);
      expect(list.length).toBe(2);
      list.delete(1);
      expect(list.length).toBe(1);
    });
  });
});
