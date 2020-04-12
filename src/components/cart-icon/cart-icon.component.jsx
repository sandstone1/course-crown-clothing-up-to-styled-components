
// import in react
import React from 'react';
// import in our shopping icon
// from LogRocket: " SVGs can be imported and used directly as a React component in your React
// code. The image is not loaded as a separate file, instead, it’s rendered along the HTML. "
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import in our style sheet
import './cart-icon.styles.scss';


// -- Mark 1 --
// lecture 108: Implementing Redux in Cart
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.actions';
// End of -- Mark 1 --


const CartIcon = ( { toggleCart } ) => (

    // -- Mark 1 --
    // lecture 108: Implementing Redux in Cart
    // now if I click on the cart icon, I see the following response in the console:
    /* 
    action TOGGLE_CART @ 15:16:50.263

    redux-logger.js:388  prev state 
    {user: {…}, cart: {…}}
        user: {currentUser: {…}}
        cart:
            show: false
            __proto__: Object
        __proto__: Object

    redux-logger.js:392  action     
    {type: "TOGGLE_CART"}
        type: "TOGGLE_CART"
    __proto__: Object

    redux-logger.js:401  next state 
    {user: {…}, cart: {…}}
        user: {currentUser: {…}}
        cart:
            show: true
            __proto__: Object
        __proto__: Object
    */

    // so our toggleCart action generator is working and the cart reducer is toggling state
    // between " show : false " and " show : true "
    <div
        className="cart-icon"
        onClick={ toggleCart }
    >

        <ShoppingIcon className="cart-icon--icon" />
        <span className="cart-icon--item-count">0</span>

    </div>
    // End of -- Mark 1 --

);



// -- Mark 1 -- continued
// lecture 108: Implementing Redux in Cart
// add mapDispatchToProps and connect()() below
const mapDispatchToProps = ( dispatch ) => (
    {
        toggleCart : () => dispatch( toggleCart() )
    }
);


export default connect( null, mapDispatchToProps )( CartIcon );
// End of -- Mark 1 --

// after I set up the styling, let's bring this into our Header component