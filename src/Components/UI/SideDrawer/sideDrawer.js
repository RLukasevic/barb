import React, { useState } from 'react';
import BackDrop from '../backDrop';
import styles from './sideDrawer.module.css';
import { Row } from 'react-bootstrap';



const SideDrawer = (props) => {

    const [startX, changeStartX] = useState(0);
    const [xOffset, changeXOffset] = useState(0);
    const [swiping, changeSwiping] = useState(false);
    const [showing, changeShowing] = useState(false);
    const [status, changeStatus] = useState(false);

    let mergedStyles = [styles.SideDrawer, styles.Close];
    if (props.show) {
        mergedStyles = [styles.SideDrawer, styles.Open];
    }

    const handleTouchStart = (event) => {
        changeSwiping(true);
        if(status === true) {
            changeStartX(event.touches[0].clientX - 280);
        } else {
            changeStartX(event.touches[0].clientX);
        }
    }

    const handleTouchMove = (event) => {
        let calcOffset = startX - event.touches[0].clientX;
        changeXOffset(calcOffset)

        if (calcOffset > 280) {
            changeShowing(false)
        }

        if (calcOffset < 280) {
            changeShowing(showing)
        }

        if (calcOffset < -280) {
            changeShowing(true)
        }
        if (calcOffset > 280) {
            changeXOffset(280)
        }
        if (calcOffset < -280) {
            changeXOffset(-280)
        }
    }

    const handleTouchEnd = () => {
        changeSwiping(false);
        if (xOffset >= 101) {
            changeXOffset(280)
            changeStatus(false)
            changeShowing(false)
        }
        if (xOffset <= -101) {
            changeXOffset(-280)
            changeStatus(true)
            changeShowing(true)
        }
        
        if (-100 < xOffset && xOffset < 100) {
            console.log('kekw')
            changeXOffset(0);
            changeStatus(false)
            changeShowing(false)
        }
        changeStartX(0);
    }

    const backDropClick = () => {
        changeStartX(0);
        changeXOffset(0);
        changeSwiping(false);
        changeShowing(false);
        changeStatus(false);
    }


    return (
        <div 
            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => handleTouchEnd()}
        >
            <div className={mergedStyles.join(' ')} style={{left: -xOffset + "px"}} >
                <Row className={styles.customRow} >
                    Prekes
                </Row>
                <Row className={styles.customRow} >
                    Mano Prekes
                </Row>
                <Row className={styles.customRow} >
                    Akcijos
                </Row>
                <Row className={styles.customRow} >
                    Eko ir Ukis
                </Row>
                <Row className={styles.customRow} >
                    Naujienos
                </Row>
                <Row className={styles.customRow} >
                    Receptai
                </Row>
            </div>
            {props.children}
            <BackDrop show={showing} cBackDrop={() => backDropClick()}/>
        </div>
    );
}

export default SideDrawer;