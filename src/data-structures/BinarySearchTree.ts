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
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: BSTNode | null, value: number): BSTNode {
    if (!node) return new BSTNode(value);
    if (value < node.value) node.left = this.insertNode(node.left, value);
    else if (value > node.value) node.right = this.insertNode(node.right, value);
    return node;
  }

  /** Return true if the value exists in the BST. */
  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: BSTNode | null, value: number): boolean {
    if (!node) return false;
    if (value === node.value) return true;
    if (value < node.value) return this.searchNode(node.left, value);
    return this.searchNode(node.right, value);
  }

  /** Delete a value from the BST. */
  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: BSTNode | null, value: number): BSTNode | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Node to delete found
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node has two children: replace with in-order successor (smallest in right subtree)
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.value = successor.value;
      node.right = this.deleteNode(node.right, successor.value);
    }
    return node;
  }

  /** In-order traversal (returns values in ascending order). */
  inOrder(): number[] {
    const result: number[] = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }

  private inOrderTraversal(node: BSTNode | null, result: number[]): void {
    if (!node) return;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
  }

  /** Pre-order traversal (root → left → right). */
  preOrder(): number[] {
    const result: number[] = [];
    this.preOrderTraversal(this.root, result);
    return result;
  }

  private preOrderTraversal(node: BSTNode | null, result: number[]): void {
    if (!node) return;
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
  }

  /** Post-order traversal (left → right → root). */
  postOrder(): number[] {
    const result: number[] = [];
    this.postOrderTraversal(this.root, result);
    return result;
  }

  private postOrderTraversal(node: BSTNode | null, result: number[]): void {
    if (!node) return;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
  }
}
