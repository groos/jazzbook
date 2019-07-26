import React from 'react';
import Chart from './components/Chart';
import ChartEditor from './components/ChartEditor';
import './App.scss';

class JazzBook extends React.Component {
    constructor(props) {
        super(props);

        var testMeasures = [
            {note: 'C', chordType: '7', beats: 4}, 
            {note: 'C', chordType: '7', beats: 4},
            {note: 'C', chordType: '7', beats: 4},
            {note: 'C', chordType: '7', beats: 4},
            {note: 'F', chordType: '7', beats: 4},
            {note: 'F', chordType: '7', beats: 4},
            {note: 'C', chordType: '7', beats: 4},
            {note: 'C', chordType: '7', beats: 4},
            {note: 'G', chordType: '7', beats: 4},
            {note: 'F', chordType: '7', beats: 4},
            {note: 'C', chordType: '7', beats: 4},
            {note: 'G', chordType: '7', beats: 4},
        ]

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
            <h3>Jazz Hands</h3>
            <ChartEditor measures={this.state.measures} appendMeasure={this.appendMeasure}/>
            <Chart measures={this.state.measures} deleteMeasure={this.deleteMeasure}/>
        </div>;
    }
}

export default JazzBook;