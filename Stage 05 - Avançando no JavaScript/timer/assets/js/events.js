import {
  buttonPause,
  buttonPlay
} from "./elements.js"

import {
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

export default function Events({controls, timer, sound}) {

  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  function startCountdown() {
    if (seconds > 0 || minutes > 0) {
      controls.changeControls();
      timer.countdown();
      sound.pressButton();
    }
    else setCountdown();
  }

  function stopCountdown() {
    controls.resetControls();
    timer.resetTimer();
    sound.pressButton();
  }

  function pauseCountdown() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    timer.hold();
    sound.pressButton();
  }

  function setCountdown(){
    minutes = prompt('Quantos minutos?') || 0;
    if(!validNumber(minutes)) {
      return;
    }

    seconds = prompt('Quantos segundos?');
    if(!validNumber(seconds)) {
      return;
    }

    minutes = Number(minutes);
    seconds = Number(seconds);

    timer.updateMinutesSeconds(minutes, seconds);
    timer.updateTimerDisplay(minutes, seconds);
  }

  function validNumber(number) {
    if(!number || (Number(number) < 0) || Number(number > 59)) {
      timer.resetTimer();
      alert('Valor inválido!');
      return false;
    }
    else return true;
  }

  return{
    startCountdown,
    stopCountdown,
    pauseCountdown,
    setCountdown
  }
}