import React, { Component } from 'react';

class Recipes extends Component {

    componentDidMount() {
        this.props.mmChanger('Receptai');
    }


    render() {

        return (
            <div style={{"minHeight": "800px"}}>
                <h4>Not Ready Yet</h4>
            </div>
        );
    }
}

export default Recipes;