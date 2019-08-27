import React from 'react';
import Tone from 'tone';

import {getArpeggioNotes} from  '../utility/musicTheory.js';

export default class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            synth: new Tone.DuoSynth().toMaster(),
            polySynth: new Tone.PolySynth(4, Tone.DuoSynth).toMaster()
        };

        this.play = this.play.bind(this);
        this.addLoop = this.addLoop.bind(this);
        this.addArpeggioLoop = this.addArpeggioLoop.bind(this);
        this.addChordLoop = this.addChordLoop.bind(this);
        this.schedulePlayback = this.schedulePlayback.bind(this);
    }

    componentDidMount() {
        this.schedulePlayback();
    }

    play = () => Tone.Transport.toggle();

    addLoop = (chordFunction) => {
        const totalMeasures = this.props.lines.reduce((acc, line) => acc + line.length);

        var loop = new Tone.Loop((loopTime) => {
            var activeMeasure = 0;
            var timeElapsed = loopTime;

            this.props.lines.forEach((line) => {
                line.forEach((measure) => {
                    measure.chords.forEach((chord) => {
                        chordFunction(chord, activeMeasure, timeElapsed);
    
                        for(var i = 1; i <= chord.beats; i++) {
                            timeElapsed += Tone.Time('4n');
                        }
                    });
    
                    activeMeasure++;
                });
            })
            // this.props.measures.forEach((measure) => {
            //     measure.chords.forEach((chord) => {
            //         chordFunction(chord, activeMeasure, timeElapsed);

            //         for(var i = 1; i <= chord.beats; i++) {
            //             timeElapsed += Tone.Time('4n');
            //         }
            //     });

            //     activeMeasure++;
            // });
        }, totalMeasures + 'm');

        loop.start(0);
    }

    addArpeggioLoop = () => {
        var arpeggioFunction = (chord, activeMeasure, timeElapsed) => {
            getArpeggioNotes(chord.note, chord.chordType).forEach((note) => {
                // 1 chord per 4 beat measure = quarter notes, 1 chord per 1 beat = 16th note
                var noteDuration = 16 / chord.beats + 'n';

                Tone.Transport.schedule((innerLoopTime) => {
                    console.log('playing ' + note + ' ' + noteDuration);
                    this.state.synth.triggerAttackRelease(note, noteDuration, innerLoopTime);
                    this.props.updateActiveMeasure(activeMeasure);
                }, timeElapsed);

                timeElapsed += Tone.Time(noteDuration);
            });
        };

        this.addLoop(arpeggioFunction);
    }

    addChordLoop = () => {
        var chordFunction = (chord, activeMeasure, timeElapsed) => {
            var chordDuration = 0;
            
            for(var i = 1; i <= chord.beats; i++) {
                chordDuration += Tone.Time('4n');
            }

            Tone.Transport.schedule((innerLoopTime) => {
                this.props.updateActiveMeasure(activeMeasure);

                var chordNotes = getArpeggioNotes(chord.note, chord.chordType);
                console.log('playing ' + chordNotes[0] + 'for ' + chordDuration)

                this.state.polySynth.triggerAttackRelease(chordNotes, chordDuration, innerLoopTime);
            }, timeElapsed)

            timeElapsed += Tone.Time(chordDuration);
        }

        this.addLoop(chordFunction);
    }

    schedulePlayback = () => {
        Tone.Transport.bpm.value = parseInt(this.props.beatsPerMinute);
        Tone.Transport.swing = 0.25;

        this.addArpeggioLoop();
        //this.addChordLoop();
    }

    render () {
        return <div className="player-wrapper simple-border">
            <h3>Player</h3>
            <button className="app-button" onClick={this.play}>Start/Stop!</button>
        </div>
    }
}