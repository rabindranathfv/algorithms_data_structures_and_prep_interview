/**
 * Binary Search Tree (BST)
 *
 * Each node has at most two children; all left descendants are smaller than
 * the node value and all right descendants are larger.
 *
 * Time Complexity (balanced tree):
 *   - insert:  O(log n)
 *   - search:  O(log n)
 *   - delete:  O(log n)
 *
 * Time Complexity (degenerate / skewed tree):
 *   - insert:  O(n)
 *   - search:  O(n)
 *   - delete:  O(n)
 *
 * Space Complexity: O(n)
 */

export class BSTNode {
  constructor(
    public value: number,
    public left: BSTNode | null = null,
    public right: BSTNode | null = null,
  ) {}
}

export class BinarySearchTree {
  private root: BSTNode | null = null;

  /** Insert a value into the BST. */
  insert(value: number): void {
    // TODO: implement
  }

  /** Return true if the value exists in the BST. */
  search(value: number): boolean {
    // TODO: implement
    return false;
  }

  /** Delete a value from the BST. */
  delete(value: number): void {
    // TODO: implement
  }

  /** In-order traversal (returns values in ascending order). */
  inOrder(): number[] {
    // TODO: implement
    return [];
  }

  /** Pre-order traversal (root → left → right). */
  preOrder(): number[] {
    // TODO: implement
    return [];
  }

  /** Post-order traversal (left → right → root). */
  postOrder(): number[] {
    // TODO: implement
    return [];
  }
}
