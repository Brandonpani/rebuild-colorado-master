const modalOpen = document.getElementById('modalOpen');
const designConsultation = document.getElementById('designConsultation');
const modalClose = document.getElementById('modalClose');

modalOpen.addEventListener('click', () => {
    designConsultation.classList.add('show');
    // console.log(modalOpen);
});
modalClose.addEventListener('click', () => {
    designConsultation.classList.remove('show');
});