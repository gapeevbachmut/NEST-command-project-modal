/////////////////////

//    відкриття модального вікна

const TESTopenModalBtn = document.getElementById('TEST-open-modal-btn'); // btn in hero
const backdrop = document.getElementById('modalBackdrop'); //  modal Backdrop
const modal = document.getElementById('bookModal'); // modal window

TESTopenModalBtn.addEventListener('click', handleClickOpenModal); //сдухач на кнопку відкриття модалки
async function handleClickOpenModal(event) {
  //  функція обробки при кліку на кнопку відкриття модалки
  console.log(event.target);
  // прибирає з  Id('modalBackdrop')  клас хіден -  появиться модальне вікно
  backdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Заборона скролу

  //  як прописати запит на сервер ???

  const response = await fetch(
    `https://books-backend.p.goit.global/books/${id}`
  );
  console.log(response); //???

  const book = await response.json();

  console.log(book);
}

///////////////////////////////////////////////////////

// закриття модального вікна

const closeBtn = document.getElementById('modalCloseBtn');

function closeModal() {
  backdrop.classList.add('hidden');
  document.body.style.overflow = ''; // Відновлення скролу
}

// Клік на кнопку-іконку хрестик
closeBtn.addEventListener('click', closeModal);

// Клік на backdrop (тільки якщо клікаємо по фону, не по модалці)
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

// Клавіша Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/////////////////////////////////////////////////////

//додавання віднімання
// зробити перевірку на тільки цифри

const quantityInput = document.getElementById('quantity'); // інпут
const increaseBtn = document.getElementById('increase'); // +
const decreaseBtn = document.getElementById('decrease'); // -

increaseBtn.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseBtn.addEventListener('click', () => {
  const current = parseInt(quantityInput.value);
  if (current > 1) {
    quantityInput.value = current - 1;
  }
});

///////////////////////////////////////////////

//  кнопки ADD та BUY

const addToCartBtn = document.getElementById('addToCart'); // ADD
const buyForm = document.getElementById('buyForm'); //  BUY
// const quantityInput = document.getElementById('quantity'); // input "+/-"
const messageBox = document.getElementById('message'); // ???  mesage

// Кнопка "Add to Cart"
addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value) || 1;
  console.log(`Додано до кошика: ${quantity} книг(и)`);

  // Відображаємо повідомлення
  messageBox.textContent = `Додано до кошика: ${quantity} книг(и)`;
  messageBox.style.color = '#007b00';
});

// Кнопка "Buy Now" (submit форми)
buyForm.addEventListener('submit', e => {
  e.preventDefault(); // не перезавантажувати сторінку
  messageBox.textContent = 'Дякуємо за покупку!';
  messageBox.style.color = '#007b00';
});

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
