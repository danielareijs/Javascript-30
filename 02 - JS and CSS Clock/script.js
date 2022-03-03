const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
    //get time
    const date = new Date()
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    // convert to degrees
    const secondDegrees = ((seconds/60) * 360) + 90;
    const minuteDegrees = ((minutes/60) * 360) + 90;
    const hourDegrees = ((hour / 12) * 360) + 90;

    // add rotate styles to each handle
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setInterval(setTime, 1000);