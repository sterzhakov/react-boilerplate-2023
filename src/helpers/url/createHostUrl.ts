export default function createHostUrl(): string {
  const { location } = window;
  return [
    location.protocol,
    '//',
    location.hostname,
    ['80', ''].includes(location.port) ? '' : `:${location.port}`
  ].join('');
}
