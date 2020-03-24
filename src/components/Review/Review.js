import React, { useEffect, useState } from 'react';
import './Review.css'
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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
    }, [])
    return (
        <div className="review-container">
            <div className="product-list">
                {
                    cart.map(pd=> <ReviewItem 
                        removeProduct={removeProduct}
                        product={pd}></ReviewItem>)
                }
            </div>
            <div className="cart-items">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;