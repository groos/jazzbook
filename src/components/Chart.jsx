import React from 'react';
import Measure from './Measure';

export default class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.buildChart = this.buildChart.bind(this);
    }

    buildChart = () => this.props.measures.map((m, i) => {
        return <Measure measure={m} index={i} deleteMeasure={this.props.deleteMeasure}/>
    });

    render() {
        return <div className="simple-border">
            <h3>Chart</h3>
            <div className="chart-wrapper">
                {this.buildChart()}
            </div>
        </div>
    }
}