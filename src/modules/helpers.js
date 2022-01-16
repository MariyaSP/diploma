const openCloseModal = ({ modalName, btnName, modelClass }) => {

    const overlay = document.querySelector('.overlay');
    console.log('процесс продолжился');

    btnName.addEventListener('click', (e) => {
        e.preventDefault();
        modalName.classList.toggle(modelClass);
        overlay.style.display = 'block';
    })

    // modalName.addEventListener('click', (e) => {
    //     if (e.target.classList.contains(modelClass+'__close')) {
    //         visible(headerModal, modelClass);
    //         overlay.style.display = 'none';
    //     }

    // })


}

export { openCloseModal }