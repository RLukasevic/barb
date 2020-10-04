import React, { Component } from 'react';

class EkoIrUkis extends Component {

    componentDidMount() {
        this.props.mmChanger('ekoIrUkis');
    }


    render() {

        return (
            <div style={{"minHeight": "800px"}}>
                <h4>Not Ready Yet</h4>
            </div>
        );
    }
}

export default EkoIrUkis;