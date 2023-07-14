export default function filterByArray<LeftItem, RightItem>(
  isItemValid: (leftItem: LeftItem, rightItem: RightItem) => boolean,
  leftItems: LeftItem[],
  rightItems: RightItem[]
) {
  return leftItems.filter((leftItem) => {
    return !rightItems.find((rightItem) => {
      return isItemValid(leftItem, rightItem);
    })
  });
}
