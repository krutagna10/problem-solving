import { test, expect } from "@jest/globals";
import kthCharacter from "../src/find-the-kth-character-in-string-game-i";

test("should return the kth character after performing operations on the string", () => {
  expect(kthCharacter(5)).toBe("b");
  expect(kthCharacter(10)).toBe("c");
});

test("should return a when value of k is 1", () => {
  expect(kthCharacter(1)).toBe("a");
})