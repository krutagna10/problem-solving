import { test, expect } from "@jest/globals";
import mergeAlternately from "../src/merge-strings-alternately";

test("should merge the the words when their length is equal", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});

test("should merge the words when word1 is longer", () => {
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
})

test("should merge the words when word2 is longer", () => {
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
})
