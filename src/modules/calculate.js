const calculate = () => {

    const pageBody = document.querySelector('body');

    const validate = (obj, material, square) => {
        const calcTotal = document.getElementById('calc-total');

        if (obj.value !== '--' && material.value !== '--' && square.value !== '') {

            calcTotal.value = ((obj.value * material.value * square.value).toFixed(1));
            localStorage.calcTotal = calcTotal.value

        }
        else {
            calcTotal.value = '';
            localStorage.calcTotal = '';
            return false;

        }

    }

    if (pageBody.classList.contains('balkony')) {
        const selectObj = document.getElementById('calc-type');
        const objMaterial = document.getElementById('calc-type-material');
        const calcInput = document.getElementById('calc-input');

        selectObj.addEventListener('change', () => {
            validate(selectObj, objMaterial, calcInput)
        });


        objMaterial.addEventListener('change', () => {
            validate(selectObj, objMaterial, calcInput)
        });

        calcInput.addEventListener('input', () => {
            calcInput.value = calcInput.value.replace(/[^0-9]/g, '');
            validate(selectObj, objMaterial, calcInput);
        }
        );

    }
}

export default calculate;