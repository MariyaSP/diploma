const modal = () => {
    const headerModal = document.querySelector('.header-modal');
    const btnModal = document.querySelector('.button');
    const overlay = document.querySelector('.overlay');

    const visible = (elem, visyStyle) => {
        elem.classList.toggle(visyStyle);
    }

    btnModal.addEventListener('click', (e) => {
        e.preventDefault();
        visible(headerModal, 'header-modal');
        overlay.style.display = 'block';
    })

    headerModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')) {
            visible(headerModal, 'header-modal');
            overlay.style.display = 'none';
        }

    })

}
export default modal;