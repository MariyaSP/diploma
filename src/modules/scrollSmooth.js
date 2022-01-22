const scrollSmooth = () => {
    const upButton = document.querySelector('.smooth-scroll');
    const benefits = document.querySelector('#benefits');

    upButton.style.display = 'none';

    document.addEventListener('scroll', () => {

        if (window.scrollY >= benefits.offsetTop) {
            upButton.style.display = 'block';

        } else {
            upButton.style.display = 'none';
        }

    })

    upButton.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    })


}
export default scrollSmooth;