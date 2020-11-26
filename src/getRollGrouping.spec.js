import {getRollGrouping} from "./getRollGrouping";

describe('getRollGrouping', function () {
  it('should handle regular roll grouping', function () {
    const result = getRollGrouping([1, 2, 3, 4])
    expect(result).toStrictEqual({1: 1, 2: 1, 3: 1, 4: 1});
  });
  it('should handle missing roll grouping', function () {
    const result = getRollGrouping([1, 2, 4])
    expect(result).toStrictEqual({1: 1, 2: 1, 3: 0, 4: 1});
  });
  it('should handle missing roll groupings at the front', function () {
    const result = getRollGrouping([2, 3, 4])
    expect(result).toStrictEqual({1: 0, 2: 1, 3: 1, 4: 1});
  });
  it('should handle multiple gaps', function () {
    const result = getRollGrouping([1, 5, 6]);
    expect(result).toStrictEqual({1: 1, 2: 0, 3: 0, 4: 0, 5: 1, 6: 1})
  });
});
