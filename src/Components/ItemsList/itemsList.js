import React, { Component } from 'react';
import Item from './Item/item';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Item/item.module.css';
import { faCaretRight as fasCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ItemsList extends Component {
    render() {

        let itemsRows = (
        <Row className="show-grid">
            <Item 
            img="https://barbora.lt/api/Images/GetInventoryImage?id=2a668bcf-1e6f-4977-8b7d-8f3b05e630de"
            alt="Vistienos sultinys"
            name="Vištienos sultinys VEGETA (12x10g), 120 g"
            oldPrice="€0,99"
            actualPrice="€0,50"
            pricePer="€4,13/kg"
            fav={true}
            cClick={this.props.cClick}
            >
            </Item> 

            <Item
            img="https://barbora.lt/api/Images/GetInventoryImage?id=fd382ff9-5a01-4627-acc4-2b8ccfd36ea5"
            alt="Tunu pjausnys"
            name="Tunų pjausnys RIO MARE alyvuogių aliejuje, 240 g"
            oldPrice="€5,49"
            actualPrice="€3,79"
            pricePer="€15,79/vnt."
            fav={false}
            >
            </Item> 
            
            <Item 
            img="https://barbora.lt/api/Images/GetInventoryImage?id=2a668bcf-1e6f-4977-8b7d-8f3b05e630de"
            alt="Vistienos sultinys"
            name="Vištienos sultinys VEGETA (12x10g), 120 g"
            oldPrice="€0,99"
            actualPrice="€0,50"
            pricePer="€4,13/kg"
            fav={false}
            >
            </Item> 

            <Item
            img="https://barbora.lt/api/Images/GetInventoryImage?id=fd382ff9-5a01-4627-acc4-2b8ccfd36ea5"
            alt="Tunu pjausnys"
            name="Tunų pjausnys RIO MARE alyvuogių aliejuje, 240 g"
            oldPrice="€5,49"
            actualPrice="€3,79"
            pricePer="€15,79/vnt."
            fav={true}
            >
            </Item> 


            </Row>)



        return (
            <Container className={styles.wholeWrap}>
                <Row className={"show-grid " + styles.ribbonWrap} >
                    <Col className={styles.mainRibbon} xl={9}>YPATINGI PASIULIMAI</Col>
                    <Col className={styles.altRibbon} ><FontAwesomeIcon icon={fasCaretRight} className={styles.arrowIcon}></FontAwesomeIcon>Daugiau akciju</Col>
                </Row>

                {itemsRows}
                {itemsRows}
                {itemsRows}

            </Container>
        );
    }
}

export default ItemsList;