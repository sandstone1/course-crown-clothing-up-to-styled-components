
import React from 'react';
import './cart-dropdown.styles.scss';

// import in our CustomButton component since we know we need one
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = ( { show } ) => (

    <div 
        className="cart-dropdown"
    >

        <div className="cart-dropdown--items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>

);

export default CartDropdown;

// after I set up the styling, let's bring this component into our Header component