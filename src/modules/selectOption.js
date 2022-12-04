import { removePopup } from './popup.js';

// If the user selects the first option from the popup, the input should be converted to H1
// If the user selects the second option from the popup, the input should be converted to H2
// If the user selects the third option from the popup, the input should be converted to P

const createTag = (input, headingType) => {
  input.className = 'input';
  input.classList.add(headingType);
  input.textContent = input.textContent.slice(2).trim();
  headingType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${headingType}`);
  input.focus();
  removePopup();
};

const selectOption = (input) => {
  const options = document.querySelectorAll('.popup__item');
  options[0].addEventListener('click', createTag.bind(null, input, 'h1'));
  options[1].addEventListener('click', createTag.bind(null, input, 'h2'));
  options[2].addEventListener('click', createTag.bind(null, input, 'p'));
};

export default selectOption;
