import React from 'react';
import Chart from './components/Chart';
import './App.scss';

class JazzBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            measures: [
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
        };
    }

    render() {
        return <div>
            <h3>Jazz Hands</h3>
            <Chart measures={this.state.measures} />
        </div>;
    }
}

export default JazzBook;