// Local types
export type Result = (JSX.Element | string)[];

export default function
mapErrorMessageToReactElements(message: string): Result {
  const messageStrings = message.split('\n');
  return messageStrings.reduce((reactElements, messageString, index) => {
    return [
      ...reactElements,
      messageString,
      <br key={index} />
    ]
  }, [] as Result);
}
