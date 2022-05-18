import { sum } from "../sum";

// toBe は Object.is を使用して厳密な等価性をテストします。
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
