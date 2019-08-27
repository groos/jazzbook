import React from 'react';
import Chart from './components/Chart';
import {getArpeggioNotes} from  './utility/musicTheory.js';
import ChartEditor from './components/ChartEditor';
import Player from './components/Player';
import {defaultValues, songs } from './static.js';
import Tone from 'tone';
import './App.scss';

class JazzBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...songs[defaultValues.songSlug],
            ...defaultValues,
            activeMeasure: 0,
            synth: new Tone.DuoSynth().toMaster(),
        };

        this.appendMeasure = this.appendMeasure.bind(this);
        this.deleteMeasure = this.deleteMeasure.bind(this);
        this.getSongPicker = this.getSongPicker.bind(this);
        this.playChord = this.playChord.bind(this);
    }

    updateActiveMeasure = (measure) => {
        this.setState({
            activeMeasure: measure
        });
    }

    playChord = (chord) => {
        Tone.Transport.bpm.value = parseInt(100);
        Tone.Transport.stop();
        var timeElapsed = Tone.Time(0);

        getArpeggioNotes(chord.note, chord.chordType).forEach((note) => {
            var noteDuration = 16 / chord.beats + 'n';

            Tone.Transport.scheduleOnce((innerLoopTime) => {
                console.log('playing ' + note + ' ' + noteDuration);
                this.state.synth.triggerAttackRelease(note, noteDuration, innerLoopTime);
            }, timeElapsed);

            timeElapsed += Tone.Time(noteDuration);
        });

        Tone.Transport.loop = false;
        Tone.Transport.toggle();
    }

    changeSong = (event) => {
        this.setState({
            songSlug: event.currentTarget.value,
            ...songs[event.currentTarget.value]
        });
    }

    appendMeasure = (chords) => {
        this.state.measures.push({
            chords: chords
        });

        this.setState({
            measures: this.state.measures
        });
    }

    deleteMeasure = (index) => {
        this.state.measures.splice(index, 1);

        this.setState({
            measures: this.state.measures
        });
    }

    getSongPicker = () => {
        let songOptions = [];

        for (var slug in songs) {
            songOptions.push(<option value={slug} key={slug}>{songs[slug].songTitle}</option>)
        }

        return <select value={this.state.songSlug} onChange={this.changeSong}>
            {songOptions}
            </select>
    }

    render() {
        return <div className="simple-border">
            <h3>Fakebook.js</h3>
            {this.getSongPicker()}
            <Chart {...this.state} deleteMeasure={this.deleteMeasure} playChord={this.playChord}/>
            {/* <Player {...this.state} updateActiveMeasure={this.updateActiveMeasure}/> */}
            {/* <ChartEditor {...this.state} appendMeasure={this.appendMeasure}/> */}
        </div>;
    }
}

export default JazzBook;