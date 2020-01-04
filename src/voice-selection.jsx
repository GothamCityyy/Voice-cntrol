import * as React from 'react';

  export class VoiceSelection extends React.Component {

  onSpeak = () => {

  this.props.onSelect(this.props.voice);

  }
render() {

  return <div onClick={this.onSpeak}>
    { this.props.voice.name }
    </div>
}

}