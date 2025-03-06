import { test, expect } from "@jest/globals";
import validPalindrome from "../src/valid-palindrome-ii";

test("should return true when string is a palindrome", () => {
  expect(validPalindrome("aba")).toBe(true);
})

test("should return true when string can be palindrome after deleting a character", () => {
  expect(validPalindrome("abca")).toBe(true);
})

test("should return false when string is not a palindrome after deleting a character", () => {
  expect(validPalindrome("abc")).toBe(false);
})
