const openBtns = document.querySelectorAll('.open__action');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
const header = document.getElementById('header');


openBtns.forEach(openBtn => openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    header.classList.add('modal');
}));

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    header.classList.remove('modal');
})

