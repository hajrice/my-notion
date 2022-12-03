const createInput = (currentInput) => {
  const newInput = document.createElement('div');
  newInput.classList.add('input');
  newInput.setAttribute('contenteditable', true);
  newInput.setAttribute('spellcheck', true);
  newInput.setAttribute('placeholder', "Type '/' for blocks");

  currentInput.insertAdjacentElement('afterend', newInput);
  newInput.focus();

  return newInput;
};

export default createInput;
