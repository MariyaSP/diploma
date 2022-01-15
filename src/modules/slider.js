const slider = (sectionId, sliderItems, arrow, flag) => {
    const sectionSlider = document.getElementById(sectionId);
    const sliderBlockItems = sectionSlider.querySelectorAll(sliderItems);
    const oldFlag = flag;

    let sizeWin = document.documentElement.clientWidth;
    let currentSlide = 0;

    const start = (sizeWin) => {
        if (sizeWin < 576) {
            flag = 0;
        } else {
            flag = oldFlag;
        }
        render(currentSlide);
    }

    window.addEventListener('resize', () => {
        sizeWin = document.documentElement.clientWidth;
        start(sizeWin);
    })

    if (!sectionSlider || !sliderBlockItems) {
        return;
    }

    const render = (currentItem) => {

        sliderBlockItems.forEach((item, index) => {
            if (index > (currentItem + flag) || index < currentItem) {

                item.style.display = 'none';
            } else {
                item.style.display = 'block';
                if (!flag)
                    item.style.maxWidth = sizeWin + 'px';
            }
        })
    }

    sectionSlider.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.closest(arrow)) {
            return;
        }

        if (e.target.closest(arrow + '--right')) {
            currentSlide += flag + 1;
        }
        else if (e.target.closest(arrow + '--left')) {
            currentSlide -= flag + 1;
        }

        if (currentSlide >= sliderBlockItems.length) {
            if (flag)
                currentSlide = 0;
            else
                currentSlide = flag + 1;
        }
        if (currentSlide < 0) {

            if (flag) {
                currentSlide = sliderBlockItems.length - (flag + 1);
            }
            else
                currentSlide = sliderBlockItems.length - 1;
        }

        render(currentSlide);


    })

    start(sizeWin);



}
export default slider;