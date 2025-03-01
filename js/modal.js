// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

// Отримуємо модальне вікно (бекдроп)
const modal = document.querySelector('.backdrop'); 

// Отримуємо всі кнопки відкриття модального вікна
const modalBtnOpen = document.querySelectorAll('.modal-btn-open'); 

// Отримуємо кнопку закриття модального вікна (хрестик)
const modalBtnClose = document.querySelector('.modal-btn-close');

// Функція для відкриття/закриття модального вікна
const toggleModal = () => {
    modal.classList.toggle('is-hidden'); // Додаємо або забираємо клас "is-hidden"
}

// Додаємо обробник подій для всіх кнопок відкриття модального вікна
modalBtnOpen.forEach(btn => {
    btn.addEventListener('click', toggleModal);
});

// Додаємо обробник подій для кнопки закриття (хрестика ❌)
modalBtnClose.addEventListener('click', toggleModal);

// Додаємо обробник подій для закриття при кліку поза модальним вікном (на фоні)
modal.addEventListener('click', (event) => {
    if (event.target === modal) { // Якщо клікнули саме на backdrop, а не на вікно
        toggleModal();
    }
});

// Додаємо обробник подій для закриття модального вікна по клавіші Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
        toggleModal();
    }
});

