// Helpers
import filterByArray from '../filterByArray';

describe('Substract one array from another', () => {
  it('filter left array by right array', () => {
    expect(
      filterByArray(
        (leftItem, rightItem) => {
          return leftItem === rightItem;
        },
        [
          1,
          2,
          3,
          4,
        ],
        [
          3,
          4,
          5,
          6,
        ]
      )
    ).toEqual([
      1,
      2,
    ])
  });
})
