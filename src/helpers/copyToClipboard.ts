// Helpers
import getPopupContainer from 'src/helpers/getPopupContainer';

// Local types
export type TextToCopy = string;

// Local helpers

function copyFast(textToCopy: TextToCopy) {
  // navigator clipboard api method'
  return navigator.clipboard.writeText(textToCopy);
}

function copyWithBetterBrowserSupport(textToCopy: TextToCopy) {
  // text area method
  let textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  // make the textarea out of viewport
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  const popupContainer = getPopupContainer();
  popupContainer.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise((res, rej) => {
    // here the magic happens
    document.execCommand('copy') ? res(true) : rej();
    textArea.remove();
  });
}

// Base

export default function copyToClipboard(textToCopy: TextToCopy) {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    copyFast(textToCopy);
  } else {
    copyWithBetterBrowserSupport(textToCopy);
  }
}
