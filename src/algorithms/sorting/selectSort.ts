/**
 * Selection Sort
 *
 * Finds the minimum element and places it at the beginning,
 * then repeats for the remaining unsorted portion.
 *
 * Time Complexity:
 *   - Best:    O(n²)
 *   - Average: O(n²)
 *   - Worst:   O(n²)
 *
 * Space Complexity: O(n) — auxiliary array used for result
 */

export function selectionSort(arr: number[]): number[] {
  const working = arr.slice();
  const result: number[] = [];
  while (working.length > 0) {
    const indexMinValue = findLowest(working);
    result.push(working.splice(indexMinValue, 1)[0]);
  }

  return result;
}

function findLowest(list: number[]): number {
  let lowestIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[lowestIndex]) {
      lowestIndex = i;
    }
  }
  return lowestIndex;
}

function verifySorting(list: number[]): boolean {
  if (list.length === 1) {
    return true;
  } else {
    return list[0] <= list[1] && verifySorting(list.slice(1));
  }
}

let unsortedList = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 200 + 1),
);

console.log(`unsorted ${unsortedList}`);

let sorted = selectionSort(unsortedList);

console.log(`sorted: ${sorted}`);

console.log(verifySorting(unsortedList));
console.log(`verify Sorted list: ${verifySorting(sorted)}`);
