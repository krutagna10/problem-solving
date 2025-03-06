import { test, expect} from "@jest/globals";
import removeDuplicates from "../src/remove-duplicates-from-sorted-array";

test("should remove all the duplicates from array and return the length of new array", () => {
  expect(removeDuplicates([2, 3, 3, 6, 9, 9])).toBe(4);
  expect(removeDuplicates([2, 2, 2, 11])).toBe(2);
})