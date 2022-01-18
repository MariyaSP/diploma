const timer = (dadline) => {

    const counter = document.querySelectorAll('.count');


    const getTimeRemaining = () => {

        let dateStop = new Date(dadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
            timeRemaining
        }
    }
    const zeroPlus = (number) => {
        return number < 10 ? '0' + number : number;
    }

    const updateClock = () => {

        let gettime = getTimeRemaining();
        if (gettime.timeRemaining > 0) {

            counter.forEach((item, index) => {

                if (index === 0 || index === 4) {
                    item.querySelector('span').textContent = zeroPlus(gettime.days);
                } else if (index === 1 || index === 5) {
                    item.querySelector('span').textContent = zeroPlus(gettime.hours);
                } else if (index === 2 || index === 6) {
                    item.querySelector('span').textContent = zeroPlus(gettime.minutes);
                } else {
                    item.querySelector('span').textContent = zeroPlus(gettime.seconds);
                }
            })

        }
        else {
            clearInterval(jTime);

            counter.forEach((item) => {
                item.querySelector('span').textContent = '00';
            })
        }
    }
    let jTime = setInterval(updateClock, 1000);


}


export default timer;