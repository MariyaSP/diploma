
import  { sendData } from './helpers';

console.log(sendData('.services-modal', "dataSubject" ));

const modal = (btnModalClass, windowModalClass) => {

    let dataSubject = '';
    const btnModal = document.querySelectorAll(btnModalClass);
    const windowModal = document.querySelector('.' + windowModalClass);
    const overlay = document.querySelector('.overlay');

    const visible = (elem, visyStyle) => {
        elem.classList.toggle(visyStyle);
    }

    btnModal.forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.getAttribute("data-subject")) {
                dataSubject = e.target.getAttribute("data-subject");

                // console.log(sendData(windowModalClass, dataSubject ));
            }
            visible(windowModal, windowModalClass);
            overlay.style.display = 'block';
        })

    })

    windowModal.addEventListener('click', (e) => {

        if (e.target.classList.contains(windowModalClass + '__close')) {
            visible(windowModal, windowModalClass);
            overlay.style.display = 'none';
        }

        if(e.target.classList.contains('feedback')){
            console.log(e.target);
        }

    })

}
export default modal;