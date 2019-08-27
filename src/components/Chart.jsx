import React from 'react';
import Measure from './Measure';

export default (props) => {
    var buildChartLines = () => props.lines.map((line, lineIndex) => {
        return <div className="chart-line" key={'line' + lineIndex}>
            {line.map((m, i) => {
                return <Measure measure={m} beatsPerMeasure={props.beatsPerMeasure} index={i} deleteMeasure={props.deleteMeasure} activeMeasure={props.activeMeasure === i} key={'line' + lineIndex + i} measureKey={'line' + lineIndex + i} playChord={props.playChord} />;
            })}
        </div>
    })

    return <div className="simple-border">
        <h3>{props.songTitle}</h3>
        <p>{props.author} | {props.source} | <a href={props.backingTrackUrl}>Backing Track</a></p>

        <h3>Time: {props.timeSignature}</h3>
        <div className="chart-wrapper">
            {buildChartLines()}
        </div>
    </div>
}