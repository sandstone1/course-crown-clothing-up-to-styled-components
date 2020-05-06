
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ( { price } ) => {
    
    // remember stripe wants the price in cents
    const priceForStripe = price * 100;
    
    // also need our publisher key so copy my publishable key from stripe and set it as a
    // string value and remember that this is a test key, as indicated from stripe's site:
    // " Viewing test API keys. Toggle to view live keys. "
    const publishableKey = 'pk_test_olbjSBmPVYQRCuhwZmDvXIX900y3PrtlUB';

    // we want onToken to be a function that takes a token and then logs it out but remember
    // you typically pass a token to your backend and this would allow you to create a
    // charge but because we aren't processing a payment we are just going to console lot out
    // the token and set up an alert that says: " Payment successful "
    const onToken = ( token ) => {
        console.log( token );
        alert( "Payment successful" );
    }

    // our <StripeCheckout /> component takes a bunch of different properties that enable or
    // disable a bunch of different features we have access to inside the checkout modal
    // and go to https://github.com/azmenak/react-stripe-checkout for details on all the
    // props you can use inside the <StripeCheckout /> component and we will enable a billing
    // address by writing " billingAddress " below and we will enable a shipping address by
    // writing " shippingAddress " below
    
    // remember token is the on success callback that triggers when we submit or press the
    // stripe checkout button and the submission will be handled by this component and typically
    // we would wait to see if the submission was sucessful
    // and if so we would pass the token to the backend so we can make the charge and by passing
    // in " onToken " we are passing in a function that will allow us to pass the token to the
    // backend upon successful submission of the stripe checkout button

    // if we test this in our app we see that it is working and I see my alert pop up saying
    // " Payment successful " and I also see my token object in the console which is displayed
    // below but it is an old stripe integration
    // and I'm getting error messages in the console saying I need to migrate to the latest
    // version

    // after we go through the payment process and filling in the fake credit card information
    // I see our token object in the console that looks like:
    /*
    {id: "tok_1GfU6VG9RUKxkjP9aAy4nBH5", object: "token", card: {…}, client_ip: "64.71.174.197",
    created: 1588697927, …}
        id: "tok_1GfU6VG9RUKxkjP9aAy4nBH5"
        object: "token"
        card: {id: "card_1GfU6VG9RUKxkjP9ZDLFMBNK", object: "card", address_city: "Lehi",
        address_country: "United States", address_line1: "4200 N Seasons View Dr, Unit N4114", …}
        client_ip: "64.71.174.197"
        created: 1588697927
        email: "rogerhall123@gmail.com"
        livemode: false
        type: "card"
        used: false
        __proto__: Object
    */

    // and this is the format for the token object that stripe needs in order to make a charge
    // and this token will go to our backend and the backend will handle making the charge

    // and Yihua said this is enough to demostrate that as a react developer you know how
    // to integrate with stripe and just like that we have a fully integrated stripe feature

    // now let's throw in our warning and modify the style so we see it in red so let's go
    // to checkout.component.jsx

    return (

        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddressCollection
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={ `Your total is $${ price }` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }        
        />

    );

}

export default StripeCheckoutButton;

// now go to our checkout component
