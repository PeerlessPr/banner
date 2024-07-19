let hours = 2;
let minutes = 0;
let seconds = 0;
let timerId = null;

function startCountdown() {
  timerId = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          hours =2;
          minutes=0;
          seconds=0;
        } else {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    document.getElementById("countdown").innerHTML = `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`
  }, 1000);
}

function zero(number) {
  return (number < 10 ? '0' : '') + number;
}
startCountdown();