import { createPopup, removePopup } from './popup.js';
import createInput from './createInput.js';

const handleInput = (input = document.querySelector('.input')) => {
  // if the firt character is /, create a popup
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/' && input.textContent.length === 1) {
      createPopup(input);
    } else {
      removePopup();
    }
  });

  // If users type /1, then text, and hitting enter, create a heading 1,and create a new input
  // Else create a new input.
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const text = input.textContent;
      if (text[0] === '/' && text[1] === '1') {
        const heading = document.createElement('h1');
        heading.textContent = text.slice(2);
        input.replaceWith(heading);
        const newInput = createInput(heading);
        handleInput(newInput);
      } else {
        const newInput = createInput(input);
        handleInput(newInput);
      }
    }
  });
};

export default handleInput;
