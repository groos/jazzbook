import React from 'react';
import Measure from './Measure';

export default (props) => {
    var buildChart = () => props.measures.map((m, i) => {
        return <Measure measure={m} index={i} deleteMeasure={props.deleteMeasure} />
    });

    return <div className="simple-border">
        <h3>Chart</h3>
        <div className="chart-wrapper">
            {buildChart()}
        </div>
    </div>
}