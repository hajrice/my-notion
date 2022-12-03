const createH1 = () => {
  const heading = document.createElement('h1');
  heading.classList.add('input');
  heading.setAttribute('contenteditable', true);
  heading.setAttribute('spellcheck', true);
  heading.setAttribute('placeholder', 'Heading 1');

  return heading;
};

export default createH1;
