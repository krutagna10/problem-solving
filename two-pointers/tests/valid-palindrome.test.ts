import { test, expect} from '@jest/globals';
import isPalindrome from '../src/valid-palindrome';

test("should return true when string is palindrome after removing all non-alphanumeric characters", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
})

test("should return false when string is not palindrome after removing all non-alphanumeric characters", () => {
  expect(isPalindrome("race a car")).toBe(false);
})

test("should return true when length of string is 0", () => {
  expect(isPalindrome("")).toBe(true);
})

