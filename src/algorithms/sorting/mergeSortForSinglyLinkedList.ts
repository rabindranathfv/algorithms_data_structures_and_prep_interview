import { truncate } from "node:fs";
import { LinkedList } from "../../data-structures";

function mergeSortForSinglyLinkedList<T>(
  linkedList: LinkedList<T>,
): LinkedList<T> {
  if (linkedList.length <= 1) {
    return linkedList;
  } else {
    const [left, right] = divide(linkedList);
    const sortedLeft = mergeSortForSinglyLinkedList(left);
    const sortedRight = mergeSortForSinglyLinkedList(right);
    return merge(sortedLeft, sortedRight);
  }
}

function divide<T>(list: LinkedList<T>): [LinkedList<T>, LinkedList<T>] {
  const mid = Math.floor(list.length / 2);
  const leftList = new LinkedList<T>();
  const rightList = new LinkedList<T>();

  let current = list.At(mid);
  for (let i = 0; i < list.length; i++) {
    if (i < mid) {
      leftList.append(list.At(i)!);
    } else {
      rightList.append(list.At(i)!);
    }
  }

  return [leftList, rightList];
}

function merge<T>(
  leftList: LinkedList<T>,
  rightList: LinkedList<T>,
): LinkedList<T> {
  let i = 0;
  let j = 0;
  const resultList = new LinkedList<T>();

  while (i < leftList.length && j < rightList.length) {
    if (leftList.At(i)! < rightList.At(j)!) {
      resultList.append(leftList.At(i)!);
      i++;
    } else {
      resultList.append(rightList.At(j)!);
      j++;
    }
  }

  while (i < leftList.length) {
    resultList.append(leftList.At(i)!);
    i++;
  }

  while (j < rightList.length) {
    resultList.append(rightList.At(j)!);
    j++;
  }

  return resultList;
}

let unsortedList = new LinkedList<number>();
[5, 3, 8, 1, 2].forEach((num) => unsortedList.append(num));

let sortedList = mergeSortForSinglyLinkedList(unsortedList);
console.log(`Unsorted list ======>: ${unsortedList.toArray()}`);
console.log(`Sorted list =====>: ${sortedList.toArray()}`);

function verifyMergeSortForSinglyLinkedList<T>(list: LinkedList<T>): boolean {
  if (list.length <= 1) {
    return true;
  } else {
    let nextList = new LinkedList<T>();
    for (let i = 1; i < list.length; i++) {
      nextList.append(list.At(i)!);
    }
    return (
      list.At(0)! < list.At(1)! && verifyMergeSortForSinglyLinkedList(nextList)
    );
  }
}

console.log(
  "verification of unsorted list:",
  verifyMergeSortForSinglyLinkedList(unsortedList),
);
console.log(
  "Verification of sorted list:",
  verifyMergeSortForSinglyLinkedList(sortedList),
);
