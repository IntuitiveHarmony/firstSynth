import './App.css'
import * as Tone from "tone"


const synth = new Tone.AMSynth().toMaster()

const playSynth =() => {
  synth.triggerAttackRelease('C2', '8n')
}

const App = () => {
  return (
    <div class='background' id='wrapper'>
      <button id='button' onClick={playSynth}>Click me</button>
    </div>
  )
}

export default App;
