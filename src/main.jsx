import * as React from 'react';

import {VoiceSelection } from './voice-selection';

export class MainView extends React.Component {

state = {

}
  
  onEnterPhrase = (event) => {
    const speak = event.target.value;
    this.setState({ speak });
  }  
 
 onSpeak = (voice) =>{
    const speak = this.state.speak;
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(speak);
    utter.voice = voice;
    synth.speak(utter);
 
  }
 
 
  render(){

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const components = voices.map(voice =>
      <VoiceSelection voice={voice} 
        onSelect={this.onSpeak} />);

  return <div>


    <input onInput={this.onEnterPhrase} />

    {components}
  </div>

  }
}







