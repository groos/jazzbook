import React from 'react';
import Chart from './components/Chart';
import ChartEditor from './components/ChartEditor';
import Player from './components/Player';
import {defaultValues, testMeasures, songs } from './static.js';
import './App.scss';

class JazzBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...songs['takeTheATrain'],
            ...defaultValues,
            activeMeasure: 0
        };

        this.appendMeasure = this.appendMeasure.bind(this);
        this.deleteMeasure = this.deleteMeasure.bind(this);
    }

    updateActiveMeasure = (measure) => {
        this.setState({
            activeMeasure: measure
        });
    }

    appendMeasure = (chords) => {
        this.state.measures.push({
            chords: chords
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
        return <div className="simple-border">
            <h3>Fakebook.js</h3>
            <Chart {...this.state} deleteMeasure={this.deleteMeasure}/>
            {/* <Player {...this.state} updateActiveMeasure={this.updateActiveMeasure}/> */}
            <ChartEditor {...this.state} appendMeasure={this.appendMeasure}/>
        </div>;
    }
}

export default JazzBook;