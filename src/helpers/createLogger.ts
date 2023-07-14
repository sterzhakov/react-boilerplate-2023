export default function createLogger(isLogEnabled: boolean) {
  return (...args: any[]) => {
    if (!isLogEnabled) return;
    console.log(...args);
  }
}
