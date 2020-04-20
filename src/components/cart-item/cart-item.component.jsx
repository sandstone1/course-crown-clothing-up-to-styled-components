
import React from 'react';
import './cart-item.styles.scss';

// below we are destructuring " item " and then destructuring " imageUrl ", " price ", " name "
// and " quantity " off of " item "
const CartItem = ( { item : { imageUrl, price, name, quantity } } ) => (

    // remember in the final app we have the image on the left side and the details on the
    // right side and the details will say something like:
    /*
    " Blue Jean Jacket "
    " 1 x $90 "
    */
    <div className="cart-item">

        <img src={ imageUrl } alt="item" className="cart-item--img" />

        <div className="cart-item--details">

            <span className="cart-item--details--name">{ name }</span>

            <span className="cart-item--details--price">
                { quantity } x ${ price }
            </span>

        </div>

    </div>

);

export default CartItem;

// now go to cart-item.styles.scss