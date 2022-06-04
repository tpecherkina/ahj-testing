import checkNumber from './checkNumber';
import checkPaymentSystem from './checkPaymentSystem';

const cardInput = document.getElementsByClassName('form-control')[0];
const btnValidate = document.getElementsByClassName('btn-success')[0];
const cards = Array.from(document.getElementsByClassName('image'));
const errorMess = document.getElementsByClassName('error_card')[0];
const validMess = document.getElementsByClassName('valid_card')[0];

cardInput.addEventListener('input', () => {
  errorMess.style.display = 'none';
  validMess.style.display = 'none';
  const result = checkPaymentSystem(cardInput.value);
  if (result) {
    cards.forEach((card) => {
      if (card.classList.contains(result)) {
        card.classList.remove('disabled');
      }
    });
  } else {
    cards.forEach((card) => card.classList.add('disabled'));
  }
});

btnValidate.addEventListener('click', (event) => {
  event.preventDefault();
  if (!checkNumber(Array.from(cardInput.value))) {
    errorMess.style.display = 'block';
  } else {
    validMess.style.display = 'block';
  }
});