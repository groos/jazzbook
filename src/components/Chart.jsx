import React from 'react';
import Measure from './Measure';

export default (props) => {
    var buildChart = () => props.measures.map((m, i) => {
        return <Measure measure={m} beatsPerMeasure={props.beatsPerMeasure} index={i} deleteMeasure={props.deleteMeasure} activeMeasure={props.activeMeasure === i} />
    });

    var buildChartLines = () => props.lines.map((line, lineIndex) => {
        return <div className="chart-line">
            {line.map((m, i) => {
                return <Measure measure={m} beatsPerMeasure={props.beatsPerMeasure} index={i} deleteMeasure={props.deleteMeasure} activeMeasure={props.activeMeasure === i} />;
            })}
        </div>
    })

    return <div className="simple-border">
        <h3>Chart</h3>
        <div className="chart-wrapper">
            {buildChartLines()}
        </div>
    </div>
}