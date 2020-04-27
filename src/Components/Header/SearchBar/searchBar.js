import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = props => {

    return (
        <form>
            <label>
                <input className={styles.inputField}></input>
                <button className={styles.Button} />
            </label>
        </form>
    );
}

export default SearchBar;