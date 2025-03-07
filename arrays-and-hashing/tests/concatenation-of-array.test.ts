import { expect, test } from "@jest/globals";
import getConcatenation from "../src/concatenation-of-array";

test("should return concatenation of array with itself", () => {
  expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
});
