import React from 'react';

class Measure extends React.Component {
    render() {
        return <div className="measure simple-border">
            <div className="chord-name">
                <h4>measure</h4>
                <h5>{this.props.measure.note}</h5>
            </div>
        </div>
    };
}

export default Measure;