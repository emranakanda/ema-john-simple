import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    //console.log(props.product.key);
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                <br />
                <p>By: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
               {props.addToCart && <button className="main-button"
                    onClick = {()=> props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;