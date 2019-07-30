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

        var loop = new Tone.Loop((loopTime) => {
            var activeMeasure = 0;
            var timeElapsed = loopTime;

            this.props.measures.forEach((measure) => {

                // 1 chord per measure = quarter notes, 2 per measure = 8th notes
                var arpeggioNoteDuration = measure.chords.length * 4;

                measure.chords.forEach((chord) => {
                    getArpeggioNotes(chord.note, chord.chordType).forEach((note) => {
                        var currentMeasure = activeMeasure;

                        var noteDuration = arpeggioNoteDuration + 'n';

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

        loop.start(0);
    }

    render () {
        return <div className="player-wrapper">
            <h5>Player</h5>
            <button onClick={this.play}>Start/Stop!</button>
        </div>
    }
}