import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("Product Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                    handleAddProduct = {handleAddProduct}
                    product={pd}
                    >
                    </Product>)
                }
            </div>
            <div className="count-container">
                <h1>This is counter</h1>
                <h5>Order Summary: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;