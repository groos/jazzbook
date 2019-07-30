import React from 'react';
import {getArpeggioNotes} from '../utility/musicTheory.js';

export default (props) => {
    const getArpeggioMarkup = (chord) => {
        var notes = getArpeggioNotes(chord.note, chord.chordType)

        return <div className='arpeggio-display'>
            {notes.map((note) => {
                return <span className='arpeggio-note'>{note}</span>
            })}
        </div>;
    }

    const getChordsMarkup = () => {
        return props.measure.chords.map((chord) => {
            return <div className="chord-display">
            <span>{chord.note}</span>
            <span>{chord.chordType}</span>

            {getArpeggioMarkup(chord)}
        </div>
        });
    }

    const getActiveClass = () => props.activeMeasure ? 'active-measure' : '';

    return <div className={"measure simple-border " + getActiveClass()}>
        <button className='delete-measure-button app-button' onClick={() => props.deleteMeasure(props.index)}>X</button>
        {getChordsMarkup()}
    </div>
}