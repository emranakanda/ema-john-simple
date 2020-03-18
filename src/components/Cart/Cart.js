import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 20){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = Math.round(total / 10);
    const grandTotal = Math.round(total + shipping + tax).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return precision;
    }

    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h5>Items ordered: {cart.length}</h5>
            <p>Total Price: <span>$</span>{formatNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>TAX + VAT: ${formatNumber(tax)}</small></p>
            <p>Total Price: ${grandTotal}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;