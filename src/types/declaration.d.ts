// https://stackoverflow.com/questions/40382842/
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
