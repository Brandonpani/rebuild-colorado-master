const modalOpen = document.getElementById('modalOpen');
const modalContainer = document.getElementById('modalContainer');
const modalClose = document.getElementById('modalClose');

modalOpen.addEventListener('click', () => {
    modalContainer.classList.toggle('Show');
});