const modalOpen = document.getElementById('modalOpen');
const modalContainer = document.getElementById('modalContainer');
const modalClose = document.getElementById('modalClose');

modalOpen.addEventListener('click', () => {
    modalContainer.classList.add('show');
    // console.log(modalOpen);
});
modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});