import { test, expect } from "@jest/globals";
import triangleNumber from "../src/valid-triangle-number";

test("should return the number of triplets that can form triangles", () => {
  expect(triangleNumber([2, 2, 3, 4])).toBe(3);
  expect(triangleNumber([4, 2, 3, 4])).toBe(4);
});
