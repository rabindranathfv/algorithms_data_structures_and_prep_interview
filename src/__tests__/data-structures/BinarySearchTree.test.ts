import { BinarySearchTree } from '../../data-structures/BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
    [5, 3, 7, 1, 4, 6, 8].forEach((v) => bst.insert(v));
  });

  describe('search', () => {
    it('returns true for values that exist', () => {
      expect(bst.search(5)).toBe(true);
      expect(bst.search(1)).toBe(true);
      expect(bst.search(8)).toBe(true);
    });

    it('returns false for values that do not exist', () => {
      expect(bst.search(99)).toBe(false);
    });
  });

  describe('inOrder', () => {
    it('returns values in ascending order', () => {
      expect(bst.inOrder()).toEqual([1, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('preOrder', () => {
    it('returns root before children', () => {
      expect(bst.preOrder()[0]).toBe(5);
    });
  });

  describe('postOrder', () => {
    it('returns root last', () => {
      const result = bst.postOrder();
      expect(result[result.length - 1]).toBe(5);
    });
  });

  describe('delete', () => {
    it('removes a leaf node', () => {
      bst.delete(1);
      expect(bst.search(1)).toBe(false);
      expect(bst.inOrder()).toEqual([3, 4, 5, 6, 7, 8]);
    });

    it('removes a node with one child', () => {
      bst.delete(3); // has children 1 and 4
      expect(bst.search(3)).toBe(false);
      // 1 and 4 should still be present
      expect(bst.search(1)).toBe(true);
      expect(bst.search(4)).toBe(true);
    });

    it('removes a node with two children', () => {
      bst.delete(7); // has children 6 and 8
      expect(bst.search(7)).toBe(false);
      expect(bst.search(6)).toBe(true);
      expect(bst.search(8)).toBe(true);
    });

    it('is a no-op when value does not exist', () => {
      bst.delete(99);
      expect(bst.inOrder()).toEqual([1, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('insert duplicates', () => {
    it('ignores duplicate values', () => {
      bst.insert(5);
      expect(bst.inOrder()).toEqual([1, 3, 4, 5, 6, 7, 8]);
    });
  });
});
