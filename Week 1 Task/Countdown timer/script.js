let countdownInterval;

function startCountdown(targetDate) {
  clearInterval(countdownInterval);

  const targetTime = new Date(targetDate).getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetTime - now;

    if (timeLeft < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML =
        "<h2>Countdown Completed!</h2>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}

document.getElementById("start-button").addEventListener("click", () => {
  const targetDate = document.getElementById("target-date").value;
  if (targetDate) {
    startCountdown(targetDate);
  } else {
    alert("Please enter a valid date and time.");
  }
});
