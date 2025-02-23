function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secondHand = document.getElementById('second-hand');
    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');

    // Calculate the rotation for each hand
    let secondDeg = ((seconds / 60) * 360) + 90; // +90 to start at 12 o'clock
    let minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // +90 to start at 12 o'clock
    let hourDeg = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30) + 90; // +90 to start at 12 o'clock

    // Apply the rotation
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();