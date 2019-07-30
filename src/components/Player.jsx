import React from 'react';
import Tone from 'tone';

import {getArpeggioNotes} from  '../utility/musicTheory.js';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            synth: new Tone.Synth().toMaster()
        };

        this.play = this.play.bind(this);
        this.schedulePlayback = this.schedulePlayback.bind(this);
    }

    componentDidMount() {
        this.schedulePlayback();
    }

    play = () => Tone.Transport.toggle();

    schedulePlayback = () => {
        Tone.Transport.bpm.value = parseInt(this.props.beatsPerMinute);

        var grossMeasureCount = 0;

        var loop = new Tone.Loop((loopTime) => {
            var activeMeasure = 0;

            this.props.measures.forEach((measure) => {
                grossMeasureCount++; 
                var beatCount = 0;
    
                getArpeggioNotes(measure.note, measure.chordType).forEach((note) => {
                    var currentMeasure = activeMeasure;
    
                    // ToneJS notation for keeping time
                    var playNoteAt = grossMeasureCount + ':' + beatCount;
                    var noteDuration = '4n'
    
                    Tone.Transport.schedule((loopTime) => {
                        this.props.updateActiveMeasure(currentMeasure);
                        this.state.synth.triggerAttackRelease(note, noteDuration, loopTime);
                    }, playNoteAt)
    
                    beatCount++;
                });

                activeMeasure++;
            });
        });

        loop.start(0);
    }

    render () {
        return <div className="player-wrapper">
            <h5>Player</h5>
            <button onClick={this.play}>Start/Stop!</button>
        </div>
    }
}