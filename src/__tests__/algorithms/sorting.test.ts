import { bubbleSort } from "../../algorithms/sorting/bubbleSort";
import { mergeSort } from "../../algorithms/sorting/mergeSort";
import { mergeSortForSinglyLinkedList } from "../../algorithms/sorting/mergeSortForSinglyLinkedList";
import { quickSort } from "../../algorithms/sorting/quickSort";
import { LinkedList } from "../../data-structures/LinkedList";

const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = [11, 12, 22, 25, 34, 64, 90];

describe.each([
  // ['bubbleSort', bubbleSort],
  ["mergeSort for Arrays", mergeSort],
  // ['quickSort', quickSort],
])("%s", (_name, sortFn) => {
  it("sorts an unsorted array", () => {
    expect(sortFn([...unsorted])).toEqual(sorted);
  });

  it("returns an already-sorted array unchanged", () => {
    expect(sortFn([...sorted])).toEqual(sorted);
  });

  it("handles a single-element array", () => {
    expect(sortFn([42])).toEqual([42]);
  });

  it("handles an empty array", () => {
    expect(sortFn([])).toEqual([]);
  });

  it("handles duplicate values", () => {
    expect(sortFn([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
  });

  it("handles negative numbers", () => {
    expect(sortFn([-3, 0, -1, 2])).toEqual([-3, -1, 0, 2]);
  });

  it("does not mutate the original array", () => {
    const original = [3, 1, 2];
    sortFn(original);
    expect(original).toEqual([3, 1, 2]);
  });
});

function toLinkedList<T>(arr: T[]): LinkedList<T> {
  const list = new LinkedList<T>();
  arr.forEach((v) => list.append(v));
  return list;
}

describe("mergeSort for Singly LinkedList", () => {
  it("sorts an unsorted linked list", () => {
    const result = mergeSortForSinglyLinkedList(
      toLinkedList([64, 34, 25, 12, 22, 11, 90]),
    );
    expect(result.toArray()).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it("returns an already-sorted linked list unchanged", () => {
    const result = mergeSortForSinglyLinkedList(
      toLinkedList([11, 12, 22, 25, 34, 64, 90]),
    );
    expect(result.toArray()).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it("handles a single-element linked list", () => {
    const result = mergeSortForSinglyLinkedList(toLinkedList([42]));
    expect(result.toArray()).toEqual([42]);
  });

  it("handles an empty linked list", () => {
    const result = mergeSortForSinglyLinkedList(toLinkedList<number>([]));
    expect(result.toArray()).toEqual([]);
  });

  it("handles duplicate values", () => {
    const result = mergeSortForSinglyLinkedList(toLinkedList([3, 1, 2, 1, 3]));
    expect(result.toArray()).toEqual([1, 1, 2, 3, 3]);
  });

  it("handles negative numbers", () => {
    const result = mergeSortForSinglyLinkedList(toLinkedList([-3, 0, -1, 2]));
    expect(result.toArray()).toEqual([-3, -1, 0, 2]);
  });

  it("does not mutate the original linked list", () => {
    const original = toLinkedList([3, 1, 2]);
    mergeSortForSinglyLinkedList(original);
    expect(original.toArray()).toEqual([3, 1, 2]);
  });
});
