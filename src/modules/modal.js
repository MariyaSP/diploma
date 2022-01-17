const modal = (btnModalClass, windowModalClass) => {

    const btnModal = document.querySelectorAll(btnModalClass);
    const windowModal = document.querySelector('.' + windowModalClass);
    const overlay = document.querySelector('.overlay');

    const visible = (elem, visyStyle) => {
        elem.classList.toggle(visyStyle);
    }

    btnModal.forEach(item => {

        item.addEventListener('click', (e) => {

            e.preventDefault();
            visible(windowModal, windowModalClass);
            overlay.style.display = 'block';
        })

    })

    windowModal.addEventListener('click', (e) => {
        if (e.target.classList.contains(windowModalClass+'__close')) {
            visible(windowModal, windowModalClass);
            overlay.style.display = 'none';
        }

    })

}
export default modal;