import React, { Component } from 'react';
import Item from '../ItemsList/Item/item';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Favorites.module.css';

class Favorites extends Component {

    state = {
        prikimuIstorijaCount: 0,
    }

    componentDidMount() {
        this.props.mmChanger('manoPrekes');
    }

    itemClicked(id) {
        this.props.history.push('/item/' + id)
    }

    render() {

        let actualItems = [];

        Object.keys(this.props.items).map(itemKey => {      
            
            if (this.props.favorited.includes(itemKey)) {

            

                let cartQuantity = 0

                if (itemKey in this.props.cart) {
                    cartQuantity = this.props.cart[itemKey];
                }

                let itemInstance = 
                    <Item
                        redirClick={(id) => this.itemClicked(id)}
                        key={itemKey}
                        id={itemKey}
                        img={this.props.items[itemKey].img}
                        alt={this.props.items[itemKey].alt}
                        name={this.props.items[itemKey].name}
                        oldPrice={this.props.items[itemKey].oldPrice}
                        actualPrice={this.props.items[itemKey].actualPrice}
                        pricePer={this.props.items[itemKey].pricePer}
                        vienetai={this.props.items[itemKey].params.vienetai}
                        quantity={cartQuantity}
                        fav={this.props.favorited == null ? false : this.props.favorited.includes(itemKey) ? true : false}
                        favClick={this.props.favClick}
                        cClick={this.props.cClick}
                        addToCartClick={this.props.addToCartClick}
                        token={this.props.token}
                        listInCartPlusButton={this.props.listInCartPlusButton}
                        listInCartMinusButton={this.props.listInCartMinusButton}
                    >
                    </Item>

                    actualItems.push(itemInstance);

                return null;
            }
        })

        return (
            <Container className={styles.wholeWrap}>
                <Row className={styles.panelsRow}>
                    <Col className={styles.panelsCol}>
                        <Row className={styles.panelTitle}>
                            Pirkimų istorija
                        </Row>
                        <Row className={styles.statusRowRed}>
                            Kol kas čia nieko nėra. Atlikite užsakymą ir jis iškart atsidurs pirkimų istorijoje!
                        </Row>
                        <Row className={styles.panelButtonRow} style={this.state.prikimuIstorijaCount > 0 ? {display:"block"} : {display:"none"}}>
                            <span className={styles.panelButton}>Atidaryti</span>
                        </Row>
                    </Col>
                </Row>
                <Row className={styles.wavyLine}/>
                <Row className='show-grid' >{actualItems}</Row>
            </Container>
        );
    }
}

export default Favorites;