import React, { useState } from 'react';

export default (props) => {
    const[note, setNote] = useState('');
    const[chordType, setChordType] = useState('');
    const[beats, setBeats] = useState(4);

    return <div className="simple-border">
            <h3>Chart Editor</h3>
            <span>Add Measure</span>
            <input onChange={(e) => setNote(e.target.value)} />
            <input onChange={(e) => setChordType(e.target.value)} />
            <input onChange={(e) => setBeats(e.target.value)} />
            
            <button onClick={() => props.appendMeasure(note, chordType, beats)}>Add</button>
        </div>
}