import React, { useEffect, useState } from 'react';
import './Review.css'
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProduct = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }) 
    return (
        <div>
            <h1>cart Items: {cart.length}</h1>
        </div>
    );
};

export default Review;