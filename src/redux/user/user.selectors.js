
// import a function called " createSelector " from the reselect library
import { createSelector } from 'reselect';

// Step 1:
// I followed the same format as was used in cart.selectors.js and was able
// to figure it out myself and remember selectUser is a input selector
const selectUser = ( state ) => state.user;

// Step 2:
// remember the first argument is an array of input selectors and the second argument
// is a function and remember the second argument gets the return value of selectUser, which is
// the user reducer and then we return user.currentUser, which equals our current user
// selector or " selectCurrentUser "
export const selectCurrentUser = createSelector( 
    [ selectUser ],
    ( user ) => user.currentUser
);

// go to cart.selector.js and make a selector for " show "