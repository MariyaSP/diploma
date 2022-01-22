const showCertificate = () => {

    const overlay = document.querySelector('.overlay');
    const documents = document.querySelector('#documents');
    const certificates = documents.querySelectorAll('.sertificate-document');
    const upButton = document.querySelector('.smooth-scroll');
    let modalPicture = '';

    const visible = (index) => {
        const certifItems = document.querySelectorAll('.certif');
        certifItems.forEach((certifItem, i) => {
            if(i===index){
                certifItem.style.display = 'block';
            }
            else {
                certifItem.style.display = 'none';
            }
        })
        viewSertif.querySelector('.fancybox-outer').style.display = 'block';
        overlay.style.display = 'block';
        upButton.style.display = 'none';
    }

    certificates.forEach((certificate, index) => {
        certificate.addEventListener('mouseenter', () => {
            certificate.classList.add('document-inner');
        });
        certificate.addEventListener('mouseleave', () => {
            certificate.classList.remove('document-inner');
        });
        certificate.addEventListener('click', (e) => {
            e.preventDefault();

            visible(index);
            
        })
        modalPicture += ` <div class="order-call-modal box-modal certif" style="display: none;">
                            <img src="${certificate.href}" alt="" style="height: 600px; width: 425px; "  >
                            </div>`
    })

    const viewSertif = document.createElement('div');
    viewSertif.setAttribute('class', 'document-modal  services-modal--opened')

    viewSertif.innerHTML = ` <div  style="padding: 0px; width: auto; height: auto;">
        <div class="fancybox-outer"  style="display: none;">
            <div class="fancybox-inner" >
            ${modalPicture}
            </div>
            <span title="Close" class="services-modal__close">x</span>
        </div>
    `;


    document.querySelector('.smooth-scroll').after(viewSertif);

    viewSertif.querySelector('.services-modal__close').addEventListener('click', () =>{
        viewSertif.querySelector('.fancybox-outer').style.display = 'none';
        overlay.style.display = 'none';
        upButton.style.display = 'block';
    })

}
export default showCertificate;