import React from 'react';
//import styles from './navigationItem.module.css';

const NavigationItem = props => {

    return (
        <button type="button" class="btn btn-link">
            {props.title}
        </button>
    );
}

export default NavigationItem;