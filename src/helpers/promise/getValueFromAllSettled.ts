export default function getValueFromAllSettled<T>(
  allSettledResult: PromiseSettledResult<T>
) {
  return allSettledResult.status === 'fulfilled'
    ? allSettledResult.value
    : null;
}
