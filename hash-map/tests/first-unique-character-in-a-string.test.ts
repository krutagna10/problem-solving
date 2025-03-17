import { test, expect } from "@jest/globals";
import firstUniqChar from "../src/first-unique-character-in-a-string";

test("should return the first non-repeating characters if it exists in the string", () => {
  expect(firstUniqChar("leetcode")).toEqual(0);
  expect(firstUniqChar("loveleetcode")).toEqual(2);
});

test("should return -1 if there are no non-repeating characters", () => {
  expect(firstUniqChar("aabb")).toEqual(-1);
})