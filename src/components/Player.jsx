import React from 'react';
import Tone from 'tone';

import {getArpeggioNotes} from  '../utility/musicTheory.js';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            synth: new Tone.Synth().toMaster(),
            polySynth: new Tone.PolySynth(4, Tone.Synch).toMaster()
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
        var chordLoop = new Tone.Loop((loopTime) => {
            var activeMeasure = 0;
            var timeElapsed = loopTime;

            this.props.measures.forEach((measure) => {
                measure.chords.forEach((chord) => {

                    var chordNotes = getArpeggioNotes(chord.note, chord.chordType);

                    var currentMeasure = activeMeasure;
                    var chordDuration = 0;
                    
                    for(var i = 1; i <= chord.beats; i++) {
                        chordDuration += Tone.Time('4n');
                    }

                    Tone.Transport.schedule((innerLoopTime) => {
                        this.props.updateActiveMeasure(currentMeasure);

                        console.log('playing ' + chordNotes[0] + 'for ' + chordDuration)
                        this.state.polySynth.triggerAttackRelease(chordNotes, chordDuration, innerLoopTime);
                    }, timeElapsed)

                    timeElapsed += Tone.Time(chordDuration);
                });

                
                activeMeasure++;
            });
        }, this.props.measures.length + 'm');

        chordLoop.start(0);
    }

    schedulePlayback = () => {
        Tone.Transport.bpm.value = parseInt(this.props.beatsPerMinute);
        Tone.Transport.swing = 0.25;

        this.addArpeggioLoop();
        this.addChordLoop();
    }

    render () {
        return <div className="player-wrapper simple-border">
            <h3>Player</h3>
            <button className="app-button" onClick={this.play}>Start/Stop!</button>
        </div>
    }
}