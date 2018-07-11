function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if (e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechaModal = modalID;
                }
            });
        }
};

document.addEventListener('scroll', () => {
    const modal = document.getElementById('modal-promocao');

    if (window.pageYOffset > 15) {
        modal.classList.remove('mostrar');
    }
})