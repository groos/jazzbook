import React from 'react';
import Tone from 'tone';

import {getArpeggioNotes} from  '../utility/musicTheory.js';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.playMeasures = this.playMeasures.bind(this);
        this.stopPlay = this.stopPlay.bind(this);
    }

    stopPlay = () => {
        this.state.synth.disconnect();
        this.state.synth.dispose();
    }

    playMeasures = () => {
        
        this.setState({
            synth: new Tone.Synth().toMaster()
        }, () => {
            Tone.Transport.bpm.value = parseInt(this.props.beatsPerMinute);

            var measureCount = 0;
    
            this.props.measures.forEach((measure) => {
                measureCount++;
                var beatCount = 0;
    
                getArpeggioNotes(measure.note, measure.chordType).forEach((note) => {
    
                    var playNoteAt = measureCount + ':' + beatCount;
                    var noteDuration = '4n'
                    var noteName = note + '4';
    
                    console.log('Play ' + noteName + ' for ' + noteDuration + ' at ' + playNoteAt);
                    this.state.synth.triggerAttackRelease(noteName, noteDuration, playNoteAt);
    
                    beatCount++;
                });
            });
        });
    }

    render () {
        return <div className="player-wrapper">
            <h5>Player</h5>
            <button onClick={this.playMeasures}>Play!</button>
            <button onClick={this.stopPlay}>Stop</button>
        </div>
    }
}