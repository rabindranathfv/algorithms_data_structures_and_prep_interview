# algorithms_data_structures_and_prep_interview

A TypeScript practice repository covering core programming concepts: **algorithms**, **data structures**, **Big-O notation** (time and space complexity), and **LeetCode** challenge solutions.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Compile TypeScript to JavaScript
npm run build
```

---

## 📁 Project Structure

```
src/
├── algorithms/
│   ├── sorting/
│   │   ├── bubbleSort.ts      — O(n²) average / O(n) best
│   │   ├── mergeSort.ts       — O(n log n) guaranteed
│   │   └── quickSort.ts       — O(n log n) average
│   └── searching/
│       ├── linearSearch.ts    — O(n)
│       └── binarySearch.ts    — O(log n) — requires sorted input
├── data-structures/
│   ├── LinkedList.ts          — Singly linked list
│   ├── Stack.ts               — LIFO stack
│   ├── Queue.ts               — FIFO queue
│   └── BinarySearchTree.ts    — BST with in/pre/post-order traversal
├── big-o/
│   └── bigOExamples.ts        — O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)
└── leetcode/
    ├── twoSum.ts                      — #1   Two Sum
    ├── validParentheses.ts            — #20  Valid Parentheses
    ├── reverseLinkedList.ts           — #206 Reverse Linked List
    ├── bestTimeToBuyAndSellStock.ts   — #121 Best Time to Buy and Sell Stock
    └── containsDuplicate.ts           — #217 Contains Duplicate
```

---

## 📊 Big-O Complexity Summary

| Notation    | Name          | Example                                |
|-------------|---------------|----------------------------------------|
| O(1)        | Constant      | Array index access, hash map lookup    |
| O(log n)    | Logarithmic   | Binary search, balanced BST operations |
| O(n)        | Linear        | Array traversal, linear search         |
| O(n log n)  | Linearithmic  | Merge sort, quick sort (avg)           |
| O(n²)       | Quadratic     | Bubble sort, nested loops              |
| O(2ⁿ)       | Exponential   | Naive Fibonacci, subset enumeration    |

---

## 🧪 Tests

80 tests across 8 test suites covering all implementations.