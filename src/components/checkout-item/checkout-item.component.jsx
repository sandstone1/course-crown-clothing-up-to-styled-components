
import React from 'react';
import './checkout-item.styles.scss';

// our remove button below will be a utf-8 dingbats and can go to
// " https://www.w3schools.com/charsets/ref_utf_dingbats.asp " to see a full list of utf-8
// characters and we will use " &#10005; " and we are going to want to pass in " item " versus
// the item properties such as imageUrl, name, price and quantity since we will want to provide
// the user with the ability to increase and decrease the quanity and click on the remove button
// and be able to remove the specified item so our argument will be
// " onst CheckoutItem = ( { cartItem : { imageUrl, name, price, quantity } } ) => ( "

const CheckoutItem = ( { cartItem : { imageUrl, name, price, quantity } } ) => (

    <div className="checkout-item">

        <img src={ imageUrl } alt="item" className="checkout-item--img" />

        <span className="checkout-item--details--name">{ name }</span>

        <span className="checkout-item--details--quantity">{ quantity }</span>

        <span className="checkout-item--details--price">${ price }</span>

        <div className="checkout-item--details--remove-button">&#10005;</div>

    </div>

);

export default CheckoutItem;