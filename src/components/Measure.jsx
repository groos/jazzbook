import React from 'react';

var tonal = require('tonal');

export default (props) => {

    const getArpeggioNotes = () => tonal.chord(props.measure.chordType).map((interval) => {
        return tonal.transpose(props.measure.note, interval);
    });

    const getArpeggioMarkup = () => {
        var notes = getArpeggioNotes();

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