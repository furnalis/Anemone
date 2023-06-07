(() => {
  const refs = {
    openModalBtn: document.querySelector('[follow-open]'),
    closeModalBtn: document.querySelector('[follow-close]'),
    modal: document.querySelector('[follow-container]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
