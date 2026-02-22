import { LinkedList } from "../../data-structures/LinkedList";

describe("LinkedList", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe("append", () => {
    it("adds elements to the end with an empty linked list", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("adds elements to the end with a non-empty linked list", () => {
      list.prepend(20);
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toArray()).toEqual([20, 1, 2, 3]);
    });

    it("adds a single element to an empty list and updates length", () => {
      list.append(42);
      expect(list.toArray()).toEqual([42]);
      expect(list.length).toBe(1);
    });

    it("maintains order when mixing prepend and append", () => {
      list.append(3);
      list.prepend(1);
      list.append(4);
      list.prepend(0);
      expect(list.toArray()).toEqual([0, 1, 3, 4]);
    });
  });

  describe("prepend", () => {
    it("adds elements to the beginning", () => {
      list.prepend(3);
      list.prepend(2);
      list.prepend(1);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("adds a single element to an empty list", () => {
      list.prepend(99);
      expect(list.toArray()).toEqual([99]);
      expect(list.length).toBe(1);
    });

    it("always inserts at the head", () => {
      list.prepend(10);
      list.prepend(20);
      list.prepend(30);
      expect(list.search(30)).toBe(0);
      expect(list.search(20)).toBe(1);
      expect(list.search(10)).toBe(2);
    });
  });

  describe("delete", () => {
    it("removes an existing value and returns true", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.delete(2)).toBe(true);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it("removes the head correctly", () => {
      list.append(1);
      list.append(2);
      list.delete(1);
      expect(list.toArray()).toEqual([2]);
    });

    it("removes the last element (tail)", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.delete(3)).toBe(true);
      expect(list.toArray()).toEqual([1, 2]);
    });

    it("removes the only element in the list", () => {
      list.append(1);
      expect(list.delete(1)).toBe(true);
      expect(list.toArray()).toEqual([]);
      expect(list.length).toBe(0);
    });

    it("removes only the first occurrence of a duplicate value", () => {
      list.append(1);
      list.append(2);
      list.append(2);
      list.append(3);
      expect(list.delete(2)).toBe(true);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("returns false when the value is not found", () => {
      list.append(1);
      expect(list.delete(99)).toBe(false);
    });

    it("returns false on an empty list", () => {
      expect(list.delete(1)).toBe(false);
    });

    it("updates length after deletion", () => {
      list.append(10);
      list.append(20);
      list.append(30);
      list.delete(20);
      expect(list.length).toBe(2);
    });
  });

  describe("search", () => {
    it("returns the index of an existing value", () => {
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.search(20)).toBe(1);
    });

    it("returns 0 when searching for the head value", () => {
      list.append(5);
      list.append(10);
      expect(list.search(5)).toBe(0);
    });

    it("returns the last index when searching for the tail value", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.search(3)).toBe(2);
    });

    it("returns -1 when the value is not found", () => {
      list.append(10);
      expect(list.search(99)).toBe(-1);
    });

    it("returns -1 on an empty list", () => {
      expect(list.search(1)).toBe(-1);
    });

    it("returns the index of the first occurrence for duplicates", () => {
      list.append(1);
      list.append(2);
      list.append(2);
      list.append(3);
      expect(list.search(2)).toBe(1);
    });
  });

  describe("toArray", () => {
    it("returns an empty array for an empty list", () => {
      expect(list.toArray()).toEqual([]);
    });

    it("returns a single-element array", () => {
      list.append(42);
      expect(list.toArray()).toEqual([42]);
    });

    it("preserves insertion order", () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.append(5);
      expect(list.toArray()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("isEmpty", () => {
    it("returns true for a new list", () => {
      expect(list.isEmpty()).toBe(true);
    });

    it("returns false after appending an element", () => {
      list.append(1);
      expect(list.isEmpty()).toBe(false);
    });

    it("returns false after prepending an element", () => {
      list.prepend(1);
      expect(list.isEmpty()).toBe(false);
    });

    it("returns true after deleting all elements", () => {
      list.append(1);
      list.append(2);
      list.delete(1);
      list.delete(2);
      expect(list.isEmpty()).toBe(true);
    });
  });

  describe("At", () => {
    it("returns the value at a valid index", () => {
      list.append(10);
      list.append(20);
      list.append(30);
      expect(list.At(0)).toBe(10);
      expect(list.At(1)).toBe(20);
      expect(list.At(2)).toBe(30);
    });

    it("returns undefined for a negative index", () => {
      list.append(1);
      expect(list.At(-1)).toBeUndefined();
    });

    it("returns undefined for an index equal to the length", () => {
      list.append(1);
      list.append(2);
      expect(list.At(2)).toBeUndefined();
    });

    it("returns undefined for an index beyond the length", () => {
      list.append(1);
      expect(list.At(100)).toBeUndefined();
    });

    it("returns undefined on an empty list", () => {
      expect(list.At(0)).toBeUndefined();
    });

    it("returns the correct value after prepend and append", () => {
      list.prepend(5);
      list.append(10);
      list.prepend(1);
      expect(list.At(0)).toBe(1);
      expect(list.At(1)).toBe(5);
      expect(list.At(2)).toBe(10);
    });
  });

  describe("length", () => {
    it("starts at 0 for a new list", () => {
      expect(list.length).toBe(0);
    });

    it("tracks the number of elements", () => {
      expect(list.length).toBe(0);
      list.append(1);
      list.append(2);
      expect(list.length).toBe(2);
      list.delete(1);
      expect(list.length).toBe(1);
    });

    it("increments on prepend", () => {
      list.prepend(1);
      list.prepend(2);
      list.prepend(3);
      expect(list.length).toBe(3);
    });

    it("returns 0 after deleting all elements", () => {
      list.append(1);
      list.append(2);
      list.delete(1);
      list.delete(2);
      expect(list.length).toBe(0);
      expect(list.toArray()).toEqual([]);
    });
  });
});
