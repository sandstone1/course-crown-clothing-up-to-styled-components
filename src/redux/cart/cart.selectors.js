
// what we want to import from the reselect library is a function called " createSelector "
import { createSelector } from 'reselect';

// first we need think about a couple things; first there are 2 types of selectors: the first
// type is called an input selector and input selectors don't use createSelector and the
// second type is called an output selector and output selectors use input selectors and
// createSelector to build themselves

// an input selector is a function that usually follows some kind of naming structure
// and input selectors take the state object as an argument and then return a slice of
// state and in our case we want the entire cart state and then we save that cart state
// object into the const " selectCart "
const selectCart = ( state ) => state.cart;

// the next selector we are going to build will use createSelector and the first argument
// will be an array of input selectors and the second argumnet will be a function that will
// return the value we want from createSelector() and remember the argument in the second
// function will equal the return value from the first argument in the array of input
// selectors and since " selectCart " equals " state.cart " the argument in the second
// function will be " cart " and what we will return in the second function will be
// " cart.cartItems "; therefore " selectCartItems " below will equal our " cartItems "
// array

// remember since we used createSelectors() to create " selectCartItems ", selectCartItems is
// now a memoized selector meaning it will cache the return value and if the state key value
// pairs do not change then our memoized selector will pass that cached value to whatever
// component needs it and since it's cached value the component will not rerender  
export const selectCartItems = createSelector( 
    [ selectCart ],
    ( cart ) => cart.cartItems
); 

// now let's make a new selector called " selectCartItemsCount " and we will use
// createSelector() again and we will use " selectCartItems " as the first argument and
// then the argument for the second function will be " cartItems " and we will take this
// piece of code:
/*
    cartItems.reduce( ( accumlator, currentElement ) =>
        accumlator + currentElement.quantity,
        0
    )
*/
// from this piece of code from cart-icon.component.jsx:
/*
const mapStateToProps = ( state ) => (
    {
        itemCount : state.cart.cartItems.reduce( ( accumlator, currentElement ) =>
            accumlator + currentElement.quantity,
            0
        )
    }
);
*/
export const selectCartItemsCount = createSelector(
    [ selectCartItems ],
    ( cartItems ) => 
        cartItems.reduce(
            ( accumlator, currentElement ) =>
                accumlator + currentElement.quantity,
                0
        )
);

// and now the return value for the function above is the total quantity of our cartItems or
// " selectCartItemsCount " and now let's pull this into our CartIcon component and see how
// it works so go to cart-icon.component.jsx


// -- Mark 1 --
// lecture 120: User Selectors
// now set up a selector for " show "

// Step 1:
// take our input selector from above or our cart reducer
// " const selectCart = ( state ) => state.cart; "

// Step 2:
// get our selector for " show " and remember the first argument is an array of input selectors
// and the second argument is a function and remember the second argument gets the return value of
// selectCart, which is our cart reducer and then we return cart.show, which equals our cart show
// selector or " selectCartShow "
export const selectCartShow = createSelector( 
    [ selectCart ],
    ( cart ) => cart.show
);

// now let's start replacing the respective selectors and let's go to header.component.jsx

// End of -- Mark 1 --


// -- Mark 2 --
// lecture 122: Checkout Page 2
// we need to create a total selector that will add the prices of each item in the cart and give
// us a total price so we could revise our " selectCartItemsCount " select above and come up with
// a total price and now go back to checkout.component.jsx and import in this selector
export const selectCartItemsPriceTotal = createSelector(
    [ selectCartItems ],
    ( cartItems ) => 
        cartItems.reduce(
            ( accumlator, currentElement ) =>
                accumlator + currentElement.quantity * currentElement.price,
                0
        )
);
// End of -- Mark 2 --

