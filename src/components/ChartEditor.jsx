import React from 'react';
import { defaultValues, chordTypes, noteLengths } from '../static.js';

export default class ChartEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chords: [{
                note: '',
                chordType: defaultValues.chordType,
                beats: props.beatsPerMeasure
            }]
        }

        this.addChordToMeasure = this.addChordToMeasure.bind(this);
        this.getChordsMarkup = this.getChordsMarkup.bind(this);
        this.getChordDurationPicker = this.getChordDurationPicker.bind(this);
    }

    addChordToMeasure() {
        this.state.chords.push({
            note: '',
            chordType: defaultValues.chordType,
            beats: this.props.beatsPerMeasure
        });

        this.setState({
            chords: this.state.chords
        });
    }

    deleteChordFromMeasure(index) {
        this.state.chords.splice(index, 1);

        this.setState({
            chords: this.state.chords
        });
    }

    updateChord(index, property, value) {
        this.state.chords[index][property] = value;

        this.setState({
            chords: this.state.chords
        });
    }

    getChordDurationPicker(chordIndex) {
        return <div className="note-type-list">
            {
                noteLengths[this.props.beatsPerMeasure].options.map((noteType) => {
                    return <button className="note-type" onClick={(e) => this.updateChord(chordIndex, 'beats', noteType.beats)}>{noteType.unicode}</button>;
                })
            }
        </div>
    }

    getChordsMarkup() {
        return this.state.chords.map((chord, index) => {
            return <div className="measure-chord simple-border">
                <button className='delete-button app-button' onClick={() => this.deleteChordFromMeasure(index)}>X</button>
                <div className="simple-border">
                    <input placeholder="Note" className='editor-input' onChange={(e) => this.updateChord(index, 'note', e.target.value)} />

                    <select onChange={(e) => this.updateChord(index, 'chordType', e.target.value)}>
                        {chordTypes.map((chord) => {
                            return <option value={chord.shortName}>{chord.fullName}</option>
                        })}
                    </select>

                    <div className='chord-duration-label'>Duration: {chord.beats} beats</div>

                    {this.getChordDurationPicker(index)}
                </div>
            </div>
        });
    }

    render() {
        return <div className="chart-editor-wrapper simple-border">
            <h3>Chart Editor</h3>
            <h4>Add Measure</h4>

            <div className="simple-border">
                {this.getChordsMarkup()}
                <div>
                    <button className="app-button" onClick={this.addChordToMeasure} >include another chord</button>
                </div>
            </div>

            <button className='editor-submit-button app-button' onClick={() => this.props.appendMeasure(this.state.chords)}>Add Measure</button>
        </div>
    }
}