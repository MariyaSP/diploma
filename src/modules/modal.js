const modal = (btnModalClass, windowModalClass) => {

    let dataSubject = '';
    const btnModal = document.querySelectorAll(btnModalClass);
    const windowModal = document.querySelector('.' + windowModalClass);
    const overlay = document.querySelector('.overlay');

    const inputs = windowModal.querySelectorAll('input');
    const form = windowModal.querySelector('form');

    const validate = (list) => {
        let success = true;
        list.forEach(inp => {
            let reg;

            let str = '';

            str = (inp.value).trim();
            switch (inp.name) {

                case 'phone':
                    reg = /^[\+\d()]/g;               //формат телефона 8 (999) 123-45-64
                    if (!reg.test(inp.value) || str.length > 17) {
                        inp.classList.add('error');
                        success = false;
                    }

                    break;

                case 'fio':
                    reg = /^[а-яА-Яa-zA-Z ]/g;
                    if (!reg.test(inp.value) || str.length < 2) {
                        inp.classList.add('error');
                        success = false;
                    }

                    break;

            }

        })


        return success;
    }

    const validateInput = (e) => {

        let nameInp = e.target.name;
        switch (nameInp) {
            case 'fio':
                e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/g, '');
                break;
            case 'phone':

                e.target.value = e.target.value.replace(/[^\+0-9]/, '');
                break;

        }
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }


    const sending = (inputs, form, formElements, dataSubject) => {

        let formBody = {};


        const formData = new FormData(form);
        formData.forEach((val, key) => {
            formBody[key] = val;
        })


        if (formBody.page == "Балконы") {

            if (document.getElementById('calc-total').value !== '') {
                formBody.calcTotal = document.getElementById('calc-total').value;
            }

        }

        if (dataSubject !== '') {
            formBody.subject = dataSubject;
        }

        if (validate(inputs)) {

            sendData(formBody)
                .then(data => {

                    formElements.forEach(input => {

                        if (input.type != 'hidden')
                            input.value = '';
                    });
                    statusBlock.textContent = "заявка отправлена";
                    const message = form.querySelector('.order-form-button');
                    message.before(statusBlock);

                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 5000);
                })
                .catch(error => {
                    console.log('Ошибка');
                });

        }
    }



    const visible = (elem, visyStyle) => {
        elem.classList.toggle(visyStyle);
    }

    btnModal.forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.getAttribute("data-subject")) {
                dataSubject = e.target.getAttribute("data-subject");
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

        if (e.target.classList.contains('feedback')) {
            e.preventDefault()
            sending(inputs, form, inputs, dataSubject);
        }
    })

    inputs.forEach((item) => {
        item.addEventListener('input', (e) => {
            item.classList.remove('error');
            validateInput(e);
        });
    })







}
export default modal;