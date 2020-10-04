import React, { Component } from 'react';

class Discounts extends Component {

    componentDidMount() {
        this.props.mmChanger('Akcijos');
    }

    render() {

        return (
            <div style={{"minHeight": "800px"}}>
                <h4>Not Ready Yet</h4>
            </div>
        );
    }
}

export default Discounts;