// Helpers
import mapErrorMessageToReactElements from './mapErrorMessageToReactElements';

export default function mapErrorToReactElements(error?: Error | null) {
  if (!error) return null;
  return mapErrorMessageToReactElements(error.message);
}
