import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button 
                className="btn"
                onClick = {() => props.handleAddProduct(props.product)}
                > Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;