import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import styles from './OrdersItem.module.css';

const OrdersItem = props => {

    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        if (carousel.length === 0) {
            formContent();
        }
    });

    let arrowOutline = {
        "filter": "invert(100)",
        "opacity": "0.9",
    }

    const formContent = () => {
        let carouselItems = [];

        for (let i = 0; i < props.itemsInOrder.orderData.length; i++) {      
            let itemInstance = 
            <Carousel.Item className={styles.carouselItem}>
                <img 
                    className={styles.carouselImage} 
                    src={props.items[props.itemsInOrder.orderData[i].itemId].imgCart}
                    alt={props.items[props.itemsInOrder.orderData[i].itemId].alt}
                />
                <Carousel.Caption>
                    <h4 className={styles.carouselH4}>x{props.itemsInOrder.orderData[i].quantity}</h4>
                </Carousel.Caption>
            </Carousel.Item>    
        
            carouselItems.push(itemInstance);
        }
        setCarousel(carouselItems)
    }

    return (
        <Col className={styles.itemcont} >
            <Row className={styles.carousel}>
                <Carousel 
                    pause="hover" 
                    indicators={false} 
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={arrowOutline} />}
                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={arrowOutline} />}
                >
                    {carousel}
                </Carousel>
            </Row>
            <Row className={styles.id}><span className={styles.idText}>Čekio numeris: </span>{props.id}</Row>
            <Row className={styles.status}>Status: Delivering</Row>
            <Row className={styles.date}>Data: {String(props.itemsInOrder.timeStamp).substr(0,10)} | {String(props.itemsInOrder.timeStamp).substr(11,5)}</Row>
            <Row className={styles.price}>Total price: €{props.itemsInOrder.orderSumPrice.replace('.',',')}</Row>
        </Col>
    );
}

export default OrdersItem;