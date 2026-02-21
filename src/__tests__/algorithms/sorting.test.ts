import { bubbleSort } from "../../algorithms/sorting/bubbleSort";
import { mergeSort } from "../../algorithms/sorting/mergeSort";
import { quickSort } from "../../algorithms/sorting/quickSort";

const unsorted = [64, 34, 25, 12, 22, 11, 90];
const sorted = [11, 12, 22, 25, 34, 64, 90];

describe.each([
  // ['bubbleSort', bubbleSort],
  ["mergeSort", mergeSort],
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
