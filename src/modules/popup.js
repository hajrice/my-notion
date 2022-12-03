import textIcon from '../images/text.svg';

let flag = false;

const createPopup = (currentInput) => {
  if (flag) return;
  const popupHtml = `
  <div class="popup">
    <div class="popup__header">
      <h4>Basic Blocks</h4>
    </div>
    <ul class="popup__list">
      <li class="popup__item heading-1">
        <img src="${textIcon}" alt="heading icon" width="30">
        <div>
          <h4>Heading 1</h4>
          <p>Big Section heading</p>
        </div>
      </li>
      <li class="popup__item">
        <img src="${textIcon}" alt="heading icon" width="30">
        <div>
          <h4>Heading 2</h4>
          <p>Medium Section heading</p>
        </div>
      </li>
    </ul>
  </div>`;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    flag = false;
  }
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.input')) return;
  removePopup();
});

export { createPopup, removePopup };
