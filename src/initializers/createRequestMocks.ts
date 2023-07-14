// Libs
import { setupWorker } from 'msw'

// Requests
import businessHandlers from 'src/requests/business/index.mocks';


// Local inits
const handlers = [
  ...businessHandlers
];

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers)

export const startRequestMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}
