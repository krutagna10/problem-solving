import { test, expect } from "@jest/globals";
import reverseString from "../src/reverse-string";

test("should reverse the input array", () => {
  const s1 = ["h", "e", "l", "l", "o"];
  reverseString(s1);
  expect(s1).toEqual(["o", "l", "l", "e", "h"]);

  const s2 = ["H", "a", "n", "n", "a", "h"];
  reverseString(s2);
  expect(s2).toEqual(["h", "a", "n", "n", "a", "H"]);
});

test("should return the same array when input array length is 1", () => {
  const s = ["h"];
  reverseString(s);
  expect(s).toEqual(["h"]);
})