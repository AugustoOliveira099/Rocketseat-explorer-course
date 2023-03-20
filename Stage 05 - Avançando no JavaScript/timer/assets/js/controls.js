import Sound from "./sound.js"
const sound = Sound();

export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn
}) {
  function changeControls() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function resetControls() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonSet.classList.remove('hide');
    buttonStop.classList.add('hide');
  }

  function bntSoundOn() {
    handleBntSound();
    sound.bgAudio.pause();
  }
  
  function bntSoundOff() {
    handleBntSound();
    sound.bgAudio.play();
  }

  function handleBntSound() {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
  }

  return {
    changeControls, 
    resetControls, 
    bntSoundOn,
    bntSoundOff
  }
}
// export { changeControls, resetControls, handleBntsound };