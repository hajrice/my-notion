import createH1 from './createH1.js';
import { removePopup } from './popup.js';
import handleInput from './handleInput.js';

const selectH1 = (e) => {
  if (e.target.closest('.heading-1')) {
    const input = document.querySelector('.input');
    const h1 = createH1();
    input.replaceWith(h1);
    h1.focus();
    removePopup();
    handleInput(h1);
  }
};

export default selectH1;
