import React, { useState } from 'react';
import {defaultValues, chordTypes} from '../static.js';

export default (props) => {
    const[note, setNote] = useState('');
    const[chordType, setChordType] = useState(defaultValues.chordType);
    const[beats, setBeats] = useState(defaultValues.beatsPerMeasure);

    return <div className="chart-editor-wrapper simple-border">
            <h3>Chart Editor</h3>
            <h4>Add Measure</h4>
            <input placeholder="Note" className='editor-input' onChange={(e) => setNote(e.target.value)} />

            <select onChange={(e) => setChordType(e.target.value)}>
                {chordTypes.map((chord) => {
                    return <option value={chord.shortName}>{chord.fullName}</option>
                })}
            </select>

            <input placeholder="Beats" className='editor-input' onChange={(e) => setBeats(e.target.value)} value={beats}/>
            
            <button className='editor-submit-button app-button' onClick={() => props.appendMeasure(note, chordType, beats)}>Add</button>
        </div>
}