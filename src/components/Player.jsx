import React from 'react';
import Tone from 'tone';

import {getArpeggioNotes} from  '../utility/musicTheory.js';
import { throwStatement } from '@babel/types';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            synth: new Tone.Synth().toMaster()
        };

        this.play = this.play.bind(this);
        this.addArpeggioLoop = this.addArpeggioLoop.bind(this);
        this.addChordLoop = this.addChordLoop.bind(this);
        this.schedulePlayback = this.schedulePlayback.bind(this);
    }

    componentDidMount() {
        this.schedulePlayback();
    }

    play = () => Tone.Transport.toggle();

    addArpeggioLoop = () => {
        var arpeggioLoop = new Tone.Loop((loopTime) => {
            var activeMeasure = 0;
            var timeElapsed = loopTime;

            this.props.measures.forEach((measure) => {

                measure.chords.forEach((chord) => {
                    getArpeggioNotes(chord.note, chord.chordType).forEach((note) => {
                        var currentMeasure = activeMeasure;

                        // 1 chord per 4 beat measure = quarter notes, 1 chord per 1 beat = 16th note
                        var noteDuration = 16 / chord.beats + 'n';

                        Tone.Transport.schedule((innerLoopTime) => {
                            this.props.updateActiveMeasure(currentMeasure);
                            console.log('playing ' + note + ' ' + noteDuration);
                            this.state.synth.triggerAttackRelease(note, noteDuration, innerLoopTime);
                        }, timeElapsed);

                        timeElapsed += Tone.Time(noteDuration);
                    });
                });

                activeMeasure++;
            });
        }, this.props.measures.length + 'm');

        arpeggioLoop.start(0);
    }

    addChordLoop = () => {

    }

    schedulePlayback = () => {
        Tone.Transport.bpm.value = parseInt(this.props.beatsPerMinute);
        Tone.Transport.swing = 0.25;

        this.addArpeggioLoop();
    }

    render () {
        return <div className="player-wrapper simple-border">
            <h3>Player</h3>
            <button className="app-button" onClick={this.play}>Start/Stop!</button>
        </div>
    }
}