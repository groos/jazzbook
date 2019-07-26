import React from 'react';

export default (props) => {
    return <div className="measure simple-border">
        <h5>Measure</h5>
        <button className='delete-measure-button app-button' onClick={() => props.deleteMeasure(props.index)}>X</button>
        <div className="chord-display">
            <span>{props.measure.note}</span>
            <span>{props.measure.chordType}</span>
        </div>
    </div>
}