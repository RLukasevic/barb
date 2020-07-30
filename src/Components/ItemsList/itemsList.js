import React, { Component } from 'react';
import Item from './Item/item';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Item/item.module.css';
import { faCaretRight as fasCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ItemsList extends Component {


    render() {

        let actualItems = [];

        Object.keys(this.props.items).map(itemKey => {       

            let itemInstance = 
                <Item
                    key={itemKey}
                    id={itemKey}
                    img={this.props.items[itemKey].img}
                    alt={this.props.items[itemKey].alt}
                    name={this.props.items[itemKey].name}
                    oldPrice={this.props.items[itemKey].oldPrice}
                    actualPrice={this.props.items[itemKey].actualPrice}
                    pricePer={this.props.items[itemKey].pricePer}
                    fav={this.props.favorited == null ? false : this.props.favorited.includes(itemKey) ? true : false}
                    favClick={this.props.favClick}
                    cClick={this.props.cClick}
                >
                </Item>

                actualItems.push(itemInstance);

            return null;
        })


        return (
            <Container className={styles.wholeWrap}>
                <Row className={"show-grid " + styles.ribbonWrap} >
                    <Col className={styles.mainRibbon} xl={9}>YPATINGI PASIULIMAI</Col>
                    <Col className={styles.altRibbon} ><FontAwesomeIcon icon={fasCaretRight} className={styles.arrowIcon}></FontAwesomeIcon>Daugiau akciju</Col>
                </Row>

                <Row className='show-grid' >{actualItems}</Row>


            </Container>
        );
    }
}

export default ItemsList;