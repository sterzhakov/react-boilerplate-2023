// Entry point for Standalone build

// Components
import Standalone from 'src/root/BuildForStandalone';

// Libs
import { createRoot } from 'react-dom/client';

// Initializers
const rootHtmlElement = document.getElementById('app');

if (rootHtmlElement === null)
  throw new Error('Can\'t render react app to dom node beacause it\'s null');

const root = createRoot(rootHtmlElement);

root.render(<Standalone />);
