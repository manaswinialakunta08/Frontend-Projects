const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    hourEl.innerText = String(h).padStart(2, "0");
    minutesEl.innerText = String(m).padStart(2, "0");
    secondsEl.innerText = String(s).padStart(2, "0");
    ampmEl.innerText = ampm;
}

// Display immediately
updateClock();

// Update dynamically every second
setInterval(updateClock, 1000);

