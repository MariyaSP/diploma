// import { openCloseModal } from './helpers'

const services = () => {
    const btnServices = document.querySelectorAll('.service-button');
    const serviceModal = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');

    const visible = (elem, visyStyle) => {
        elem.classList.toggle(visyStyle);
    }

    btnServices.forEach(item => {

        item.addEventListener('click', (e) => {
            
            e.preventDefault();
            visible(serviceModal, 'services-modal');
            overlay.style.display = 'block';
        })

    })

    serviceModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('services-modal__close')) {
            visible(serviceModal, 'services-modal');
            overlay.style.display = 'none';
        }

    })

}

export default services;