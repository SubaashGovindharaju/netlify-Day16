function displayCountdown(count) {
  const countdownEl = document.querySelector("#countdown");
  countdownEl.innerHTML = count;

  if (count === 0) {
    const messageEl = document.querySelector("#message");
    messageEl.innerHTML = "Happy Independence Day!";
    countdownEl.style.display = "none"; 
  } else {
    setTimeout(() => {
      displayCountdown(count - 1);
    }, 1000);
  }
}

displayCountdown(10);