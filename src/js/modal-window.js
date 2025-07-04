/////////////////////        DELETE

const TESTopenModalBtn = document.getElementById('TEST-open-modal-btn'); // btn in hero
const backdrop = document.getElementById('modalBackdrop'); //  modal Backdrop
const modal = document.getElementById('bookModal'); // modal window

TESTopenModalBtn.addEventListener('click', handleClickOpenModal); //сдухач на кнопку відкриття модалки
function handleClickOpenModal(event) {
  //  функція обробки при кліку на кнопку відкриття модалки
  console.log(event.target);
  // прибрати з  Id('modalBackdrop')  клас хіден -  появиться модальне вікно
  backdrop.classList.remove('hidden');
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// const modal = document.getElementById('bookModal');
// const backdrop = document.getElementById('modalBackdrop');
// const closeBtn = document.getElementById('modalCloseBtn');
// const quantityInput = document.getElementById('quantity');
// const addToCartBtn = document.getElementById('addToCart');
// const buyForm = document.getElementById('buyForm');

// const accordionHeaders = document.querySelectorAll('.accordion-header');

// const openModal = async bookId => {
//   document.body.style.overflow = 'hidden';

//   backdrop.classList.remove('hidden');

//   const response = await fetch(
//     `https://books-backend.p.goit.global/books/${bookId}`
//   );

//   const book = await response.json();

//   document.getElementById('bookImage').src = book.book_image;
//   document.getElementById('bookTitle').textContent = book.title;
//   document.getElementById('bookAuthor').textContent = book.author;
//   document.getElementById('bookPrice').textContent = `$${book.price}`;

//   // You can modify below with real book data if available
//   // Ви можете змінити нижче дані реальної книги, якщо такі є

//   document.getElementById('bookDetails').textContent = 'Details info...';
//   document.getElementById('bookShipping').textContent = 'Shipping info...';
//   document.getElementById('bookReturns').textContent = 'Returns info...';
// };

// const closeModal = () => {
//   document.body.style.overflow = 'auto';
//   backdrop.classList.add('hidden');
// };

// closeBtn.addEventListener('click', closeModal);

// backdrop.addEventListener('click', e => {
//   if (e.target === backdrop) closeModal();
// });

// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape') closeModal();
// });

// document.getElementById('increase').addEventListener('click', () => {
//   quantityInput.value = +quantityInput.value + 1;
// });
// document.getElementById('decrease').addEventListener('click', () => {
//   if (+quantityInput.value > 1) {
//     quantityInput.value = +quantityInput.value - 1;
//   }
// });

// addToCartBtn.addEventListener('click', () => {
//   console.log(`Додано в кошик: ${quantityInput.value} книг`);
//   alert(`Додано в кошик: ${quantityInput.value} книг`);
// });

// buyForm.addEventListener('submit', e => {
//   e.preventDefault();
//   alert('Дякуємо за покупку!');
// });

// accordionHeaders.forEach(header => {
//   header.addEventListener('click', () => {
//     const body = header.nextElementSibling;
//     body.classList.toggle('active');
//   });
// });

// Приклад виклику модального (замінити на свій event listener)
// document.querySelectorAll('.learn-more-btn').forEach(btn => {
//   btn.addEventListener('click', e => {
//     const bookId = e.target.dataset.bookId;
//     openModal(bookId);
//   });
// });
