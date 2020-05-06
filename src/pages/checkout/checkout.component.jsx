
import React from 'react';
import './checkout.styles.scss';

// -- Mark 1 --
// lecture 122: Checkout Page 2
// add in the 5 header block divs and corresponding span elements and now go to
// checkout.styles.scss to style the CheckoutPage component

// were back from checkout.style.scss and now let's bring in our cartItems from our
// state object but first let's import connect, createStructuredSelector, selectCartItems and
// selectCartItemsPriceTotal and then set up mapStateToProps below using
// createStructuredSelector, selectCartItems and selectCartItemsPriceTotal
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';

// after I set up mapStateToProps below then bring " cartItems " into the CheckoutPage component
// and go to cart.selectors.js to set the cart total selector and now we are back from
// cart.selectors.js and next we need to add " total : selectCartItemsPriceTotal " to
// mapStateToProps below and then bring " total " into our CheckoutPage component amd use " total "
// to show the total price of all the items in the cart and I went to the app and checked the app
// and cartItem.name is working and " total " is working as well
// End of -- Mark 1 --


// -- Mark 2 --
// lecture 125: Checkout Item Component
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// make a new folder called " checkout-item " and inside that folder add
// " checkout-item.component.jsx " and " checkout-item.styles.scss " and then let's go
// to our checkout-item.component.jsx file and now we are back form checkout.component.jsx
// and below we added our CheckoutItem component or
/*
    {
        cartItems.map( ( cartItem ) => (
            <CheckoutItem
                key={ cartItem.id }
                cartItem={ cartItem }
            />
        ) )
    }
*/

// now if we go to the app we see our checkout page is populating correctly and before
// we go to the next lecture, let's commit our code

// Rogers-iMac:crown_clothing Home$ git status
// Rogers-iMac:crown_clothing Home$ git add .
// Rogers-iMac:crown_clothing Home$ git commit -m " added checkout page, checkout item
// component and updated the dropdown user behavior "
// Rogers-iMac:crown_clothing Home$ git push origin master

// now if I go to my " crown-clothing " project in GutHub, I see the changes were uploaded
// sucessfully
// End of -- Mark 2 --



// -- Mark 3 --
// lecture 142: Stripe Integration
// insert the StripeCheckoutButton at the end and now if we go to our app we will see the
// stripe checkout button at the bottom of the checkout page and let's put a warning
// and put the wrning just above our StripeCheckoutButton component
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// End of -- Mark 3 --



const CheckoutPage = ( { cartItems, total } ) => (

    <div className="checkout">

        <div className="checkout--header">

            <div className="checkout--header-block">
                <span>Product</span>
            </div>

            <div className="checkout--header-block">
                <span>Description</span>
            </div>

            <div className="checkout--header-block">
                <span>Quantity</span>
            </div>

            <div className="checkout--header-block">
                <span>Price</span>
            </div>

            <div className="checkout--header-block">
                <span>Remove</span>
            </div>

        </div>

        <div className="checkout--cart-items">
            
            {
                cartItems.map( ( cartItem ) => (

                    <CheckoutItem
                        key={ cartItem.id }
                        cartItem={ cartItem }
                    />

                ) )
            }

            <div className="checkout--cart-items-total">
                <span>Total: ${ total }</span>
            </div>

        </div>

        <div className="checkout--test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>

        <StripeCheckoutButton price={ total } />

    </div>

);

// -- Mark 1 -- continued
// lecture 122: Checkout Page 2
const mapStateToProps = createStructuredSelector(

    {
        cartItems : selectCartItems,
        total     : selectCartItemsPriceTotal
    }

);

// remember, we could have written mapStateToProps using state, etc. but we would not have
// had the performance benefits that come with using selectors
/*
const mapStateToProps = ( state ) => (

    {
        cartItems : state.cart.cartItems,
        total     : state.cart.cartItems.reduce( ( accumlator, currentElement ) =>
                            accumlator + currentElement.quantity * currentElement.price,
                            0
                    )
    }

);
*/


export default connect( mapStateToProps )( CheckoutPage );
// End of -- Mark 1 --

// now go to App.js and checkout page to our routes