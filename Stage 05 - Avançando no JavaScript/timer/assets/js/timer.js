import Sound from "./sound.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let fixedMinutes = Number(minutesDisplay.textContent);
  let fixedSeconds = Number(secondsDisplay.textContent);
  let timerTimeOut;

  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }

      if (minutes < 0) {
        resetControls();
        resetTimer();
        Sound().timeEnd();
        return;
      }

      updateTimerDisplay(minutes, seconds);
      countdown();
    }, 1000);
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function resetTimer() {
    updateTimerDisplay(fixedMinutes, fixedSeconds);
    clearTimeout(timerTimeOut);
  }

  function updateMinutesSeconds(minutes, seconds) {
    fixedMinutes = minutes;
    fixedSeconds = seconds;
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    countdown,
    resetTimer,
    updateTimerDisplay,
    updateMinutesSeconds,
    hold
  }
}
// export { countdown, updateTimerDisplay, resetTimer };