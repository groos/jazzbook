import React from 'react';
import {getArpeggioNotes} from '../utility/musicTheory.js';

export default (props) => {
    const getArpeggioMarkup = () => {
        var notes = getArpeggioNotes(props.measure.note, props.measure.chordType)

        return <div className='arpeggio-display'>
            {notes.map((note) => {
                return <span className='arpeggio-note'>{note}</span>
            })}
        </div>;
    }

    return <div className="measure simple-border">
        <button className='delete-measure-button app-button' onClick={() => props.deleteMeasure(props.index)}>X</button>
        <div className="chord-display">
            <span>{props.measure.note}</span>
            <span>{props.measure.chordType}</span>

            {getArpeggioMarkup()}
        </div>
    </div>
}