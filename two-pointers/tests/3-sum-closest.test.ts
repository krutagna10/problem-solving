import { test, expect} from "@jest/globals";
import threeSumClosest from "../src/3-sum-closest";

test("should return the sum that is closest to target", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toEqual(2);
  expect(threeSumClosest([0, 0, 0], 1)).toEqual(0);
});
