/**
 * Merge Sort
 *
 * Divides the array in half recursively, then merges sorted halves.
 *
 * Time Complexity:
 *   - Best:    O(n log n)
 *   - Average: O(n log n)
 *   - Worst:   O(n log n)
 *
 * Space Complexity: O(n) — auxiliary arrays used during merging
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } else {
    const [left, right] = divide(arr);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
  }
}

function divide(arr: number[]): [number[], number[]] {
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return [left, right];
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

let unsortedArr = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100 + 1),
);

console.log(`Unsorted array ======>: ${unsortedArr}`);

let res = mergeSort(unsortedArr);
console.log(`Sorted array =====>: ${res}`);

function verifyMergeSort(arr: number[]): boolean {
  if (arr.length <= 1) {
    return true;
  } else {
    return arr[0] <= arr[1] && verifyMergeSort(arr.slice(1));
  }
}

console.log(`Merge Sort is correct: ${verifyMergeSort(res)}`);
