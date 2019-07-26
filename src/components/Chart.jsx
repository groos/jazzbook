import React from 'react';
import Measure from './Measure';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.buildChart = this.buildChart.bind(this);
    }

    buildChart = () => this.props.measures.map((m) => {
        return <Measure measure={m}/>
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

export default Chart;