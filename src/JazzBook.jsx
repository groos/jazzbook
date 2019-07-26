import React from 'react';
import Chart from './components/Chart';
import ChartEditor from './components/ChartEditor';
import {testMeasures} from './static.js';
import './App.scss';

class JazzBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            measures: testMeasures
        };

        this.appendMeasure = this.appendMeasure.bind(this);
        this.deleteMeasure = this.deleteMeasure.bind(this);
    }

    appendMeasure = (note, chordType, beats) => {
        this.state.measures.push({
            note, chordType, beats: parseInt(beats)
        });

        this.setState({
            measures: this.state.measures
        });
    }

    deleteMeasure = (index) => {
        this.state.measures.splice(index, 1);

        this.setState({
            measures: this.state.measures
        });
    }

    render() {
        return <div>
            <h3>Jazz Book</h3>
            <Chart measures={this.state.measures} deleteMeasure={this.deleteMeasure}/>
            <ChartEditor measures={this.state.measures} appendMeasure={this.appendMeasure}/>
        </div>;
    }
}

export default JazzBook;