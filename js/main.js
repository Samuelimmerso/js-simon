const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");
const alert = document.querySelector(".alert").classList;
let today_date = new Date();
let tomorrow_date = new Date();
tomorrow_date = tomorrow_date.setHours(9, 30);



titleEl.innerHTML = "Alla prossima lezione";
let totalSeconds = (tomorrow_date - today_date) / 1000;
const clockCronometro = setInterval(stampaTempoTrascorso, 1000);
stampaTempoTrascorso();

function stampaTempoTrascorso() {
    --totalSeconds;

    const seconds = totalSeconds % 60;
    const minutes = parseInt((totalSeconds / 60) % 60);
    const hours = parseInt((totalSeconds / 60 / 60) % 24);
    const days = parseInt((totalSeconds / 60 / 60 / 24));

    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;


    if (totalSeconds <= 0) {
        alert.remove("d-none");
        clearInterval(clockCronometro);
    }
}

