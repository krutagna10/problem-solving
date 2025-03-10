import { test, expect } from "@jest/globals";
import backspaceCompare from "../src/backscape-string-compare";

test("should return true when strings are equal after simulating backscape operations", () => {
  expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  expect(backspaceCompare("ab##", "c#d#")).toBe(true);
});

test("should return false when strings are not equal after simulating backscape operations", () => {
  expect(backspaceCompare("a#c", "b")).toBe(false);
});



