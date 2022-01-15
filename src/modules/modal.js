const modal = () => {
    const headerModal = document.querySelector('.header-modal');
    const btnModal = document.querySelector('.button');
    const overlay = document.querySelector('.overlay');
    //const btnClose = headerModal.querySelector('.header-modal__close')


    btnModal.addEventListener('click', (e) => {
        e.preventDefault();
        headerModal.style.display = 'block';
        overlay.style.display = 'block';
    })

    headerModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')){
            headerModal.style.display = 'none';
            overlay.style.display = 'none';
        }
        
    })

}
export default modal;;