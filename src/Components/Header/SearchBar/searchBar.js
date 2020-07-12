import React from 'react';
import SearchIcon from '../../../assets/svg/SearchIcon';
import styles from './searchBar.module.css';

const SearchBar = props => {

    return (
        <form>
            <label>
                <input type="text" className={styles.inputField} placeholder="Iveskite ieskoma preke, pvz., pienas" ></input>
                <button className={styles.Button} ><SearchIcon fill="white" /></button>
            </label>
        </form>
    );
}

export default SearchBar;