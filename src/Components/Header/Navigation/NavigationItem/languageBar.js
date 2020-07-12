import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './languageBar.module.css';
import GlobeIcon from '../../../../assets/svg/GlobeIcon';

const LanguageBar = props => {

    return (
        <Row style={{"width": "100px", "marginTop": "2px"}} >
            <div className={styles.languageBarCol} >
                <GlobeIcon />
            </div>
            <div className={styles.languageBarCol}>
            <select className={styles.languageOptionsWrap} >
                <option>Lietuviu</option>
                <option>English</option>
                <option>Русский</option>
            </select>
            </div>
        </Row>
    )
}

export default LanguageBar;