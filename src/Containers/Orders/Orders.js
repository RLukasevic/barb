import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrdersItem from './OrdersItem/OrdersItem';
import { connect } from 'react-redux';
import styles from './Orders.module.css';

class Orders extends Component {


    render() {

        let actualItems = [];


        for (let i = this.props.orders.length; i > 0; i--) {                        // Reversing cycle
            Object.keys(this.props.orders[i-1]).map(itemKey => {                    // to get newest orders on top 

                let currentOrder = this.props.orders[i-1];
    
                let itemInstance = 
                    <OrdersItem
                        key={itemKey}
                        id={itemKey}
                        items={this.props.items}
                        itemsInOrder={currentOrder[itemKey]}
                    >
                    </OrdersItem>
    
                actualItems.push(itemInstance);
            })
        }



        return (
            <Container className={styles.wholeWrap}>
                <Row xs={1} className="show-grid" className={styles.itemsRow} >
                    {actualItems}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.authData.idToken,
        items: state.home.items,
        orders: state.home.orders,
    }
}

export default connect(mapStateToProps,null)(Orders);