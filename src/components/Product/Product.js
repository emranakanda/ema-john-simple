import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    // console.log(props.product);
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <br />
                <p>By: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="main-button"
                    onClick = {()=> props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;