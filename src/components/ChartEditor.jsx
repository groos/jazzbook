import React, { useState } from 'react';

export default (props) => {
    const[note, setNote] = useState('');
    const[chordType, setChordType] = useState('');
    const[beats, setBeats] = useState(4);

    return <div className="chart-editor-wrapper simple-border">
            <h3>Chart Editor</h3>
            <h4>Add Measure</h4>
            <input className='editor-input' onChange={(e) => setNote(e.target.value)} />
            <input className='editor-input' onChange={(e) => setChordType(e.target.value)} />
            <input className='editor-input' onChange={(e) => setBeats(e.target.value)} value={beats}/>
            
            <button className='editor-submit-button app-button' onClick={() => props.appendMeasure(note, chordType, beats)}>Add</button>
        </div>
}