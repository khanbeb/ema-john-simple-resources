import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tex = (total / 10).toFixed(2);
    const totalvalue = (total + shipping + Number(tex)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Orders: {cart.length}</p>
             <p>prosuct Price: {formatNumber(total)}</p>
             <p><small>Shipping Cost:{shipping}</small></p>
             <p>Vat + Tex {tex}</p>
            <h2>Total Price: {totalvalue}</h2>
        </div>
    );
};

export default Cart;