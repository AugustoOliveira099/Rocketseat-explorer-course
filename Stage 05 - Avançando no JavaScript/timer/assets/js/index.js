import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import Sound from "./sound.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
});

const sound = Sound();

const events = Events({controls, timer, sound});


buttonPlay.addEventListener('click', events.startCountdown);
buttonStop.addEventListener('click', events.stopCountdown);
buttonPause.addEventListener('click', events.pauseCountdown);
buttonSet.addEventListener('click', events.setCountdown);
buttonSoundOn.addEventListener('click', controls.bntSoundOn);
buttonSoundOff.addEventListener('click', controls.bntSoundOff);