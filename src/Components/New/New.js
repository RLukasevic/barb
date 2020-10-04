import React, { Component } from 'react';

class New extends Component {

    componentDidMount() {
        this.props.mmChanger('Naujienos');
    }

    render() {

        return (
            <div style={{"minHeight": "800px"}}>
                <h4>Not Ready Yet</h4>
            </div>
        );
    }
}

export default New;