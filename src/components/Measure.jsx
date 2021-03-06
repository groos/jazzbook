import React from 'react';
import {getArpeggioNotes, getSimpleNoteName} from '../utility/musicTheory.js';

export default (props) => {
    const getArpeggioMarkup = (chord) => {
        var notes = getArpeggioNotes(chord.note, chord.chordType)

        return <div className='arpeggio-display'>
            {notes.map((note, i) => {
                return <span className='arpeggio-note' key={i}>{getSimpleNoteName(note)}</span>
            })}
        </div>;
    }

    const getChordsMarkup = () => {
        return props.measure.chords.map((chord, i) => {
            return <div className={"chord-display"} key={i} onClick={() => props.playChord(chord)}>
            <span>{getSimpleNoteName(chord.note)}</span>
            <span>{chord.chordType}</span>

            <div className="chord-detail-wrapper">
                {getArpeggioMarkup(chord)}
            </div>
        </div>
        });
    }

    //const getActiveClass = () => props.activeMeasure ? ' active-measure' : ' ';
    const getActiveClass = () => ' ';

    const getRepeatBar = () => {
        if (props.measure.beginRepeat) {
            return <div className="repeat-bar-container start">
                <div className="repeat-bar"></div><div className="repeat-bar little"></div>
                <div className="repeat-dot top"></div><div className="repeat-dot bottom"></div>
            </div>
        }

        if (props.measure.endRepeat) {
            return <div className="repeat-bar-container end">
                <div className="repeat-bar little"></div><div className="repeat-bar end"></div>
                <div className="repeat-dot top"></div><div className="repeat-dot bottom"></div>
            </div>
        }
    }

    const getStartEndBar = () => {
        if (props.measure.isStart) {
            return <div className="repeat-bar-container start">
            <div className="repeat-bar"></div><div className="repeat-bar little"></div>
        </div>
        }

        if (props.measure.isEnd) {
            return <div className="repeat-bar-container end">
                <div className="repeat-bar little"></div><div className="repeat-bar end"></div>
            </div>
        }
    }

    return <div className={"measure measure-border" + getActiveClass()} key={props.measureKey}>
        {getRepeatBar()}
        {/* <button className='app-button delete-button delete-measure-button' onClick={() => props.deleteMeasure(props.index)}>X</button> */}
        <div className="measure-chords-wrapper">
            {getChordsMarkup()}
        </div>
        {getStartEndBar()}
    </div>
}