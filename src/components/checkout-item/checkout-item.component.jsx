
import React from 'react';
import './checkout-item.styles.scss';

// our remove button below will be a utf-8 dingbats and can go to
// " https://www.w3schools.com/charsets/ref_utf_dingbats.asp " to see a full list of utf-8
// characters and we will use " &#10005; " and we are going to want to pass in " item " versus
// the item properties such as imageUrl, name, price and quantity since we will want to provide
// the user with the ability to increase and decrease the quanity and click on the remove button
// and be able to remove the specified item so our argument will be
// " const CheckoutItem = ( { cartItem : { imageUrl, name, price, quantity } } ) => ( "


// -- Mark 1 --
// lecture 126: Remove Items From Cart
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';


// -- Mark 2 --
// lecture 127: Remove Items At Checkout
// first thing we need to do is add the arrows and let's again go to the following link
// " https://www.w3schools.com/charsets/ref_utf_dingbats.asp " to add the arrows and
// now let's add the functionality to our left and right arrows but first let's go to
// cart.types.js and now I'm back from cart.reducer.js and let's import the addItem and removeItem
// action creators below and then let's change mapDispatchToProps to include and dispatch both
// the addItem and removeItem action generators and then add both addItem and removeItem to our
// CheckoutItem component argument below and then add click handlers to our left and
// right arrows below so that we dispatch the proper action upon clicking the left or right
// arrow, which will then update our cart reducer, which will then update our state object
// and when I go to our app to test the functionality I see everything is working correctly
// and Yihua said that by combining everything we've built up to this point we've built a pretty
// robust feature ( i.e. the decrease and increase functionality related to our left and right
// arrows ) inside our CheckoutItem component

// now let's commit our code

// Rogers-iMac:crown_clothing Home$ git status
// Rogers-iMac:crown_clothing Home$ git add .
// Rogers-iMac:crown_clothing Home$ git commit -m " added addItem and removeItem functionality
// to our CheckoutItem component "
// Rogers-iMac:crown_clothing Home$ git push origin master

// now if I go to my " crown-clothing " project in GutHub, I see the changes were uploaded
// sucessfully
import { addItem, removeItem } from '../../redux/cart/cart.actions';


// remember, by strcuturing our argument as follows:
// " const CheckoutItem = ( { cartItem : { imageUrl, name, price, quantity } } ) => ( "
// we do not have access to the cartItem property within the component so we need to change
// the argument to:
// " const CheckoutItem = ( { cartItem, clearItemFromCart } ) => { "
const CheckoutItem = ( { cartItem, clearItemFromCart, addItem, removeItem } ) => {

    // destructure imageUrl, name, price, quantity from cartItem and add return() below and
    // {} above and now if we go back to our application and click on the remove button or " x "
    // we see that our functionality is working as excepted and our cart item is removed after
    // clicking on the " x " and Yihua said you will see that redux is pretty much just this
    // same pattern being used over and over again
    const { imageUrl, name, price, quantity } = cartItem;

    return(

        <div className="checkout-item">

            <img src={ imageUrl } alt="item" className="checkout-item--img" />

            <span className="checkout-item--name">{ name }</span>

            <span className="checkout-item--quantity">
                <span className="checkout-item--quantity-arrow-left"
                    onClick={ () => removeItem( cartItem ) }
                >
                    &#10094;
                </span>
                    { quantity }
                <span className="checkout-item--quantity-arrow-right"
                    onClick={ () => addItem( cartItem ) }
                >
                    &#10095;
                </span>
            </span>

            <span className="checkout-item--price">${ price }</span>

            <div className="checkout-item--remove-button"
                onClick={ () => clearItemFromCart( cartItem ) }
            >
                &#10005;
            </div>

        </div>

    );
    // End of -- Mark 1 and Mark 2 --

}


// -- Mark 1 -- continued
// lecture 126: Remove Items From Cart
// add connect and mapDispatchToProps below and don't forget to put " null " as the first
// argument to connect below
const mapDispatchToProps =  ( dispatch ) => (

    {
        clearItemFromCart : ( item ) => dispatch( clearItemFromCart( item ) ),
        addItem           : ( item ) => dispatch( addItem( item ) ),
        removeItem        : ( item ) => dispatch( removeItem( item ) )        
    }

);

export default connect( null, mapDispatchToProps )( CheckoutItem );
// End of -- Mark 1 and Mark 2 --

