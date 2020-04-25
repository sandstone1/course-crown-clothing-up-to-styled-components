
import { CartActionTypes } from './cart.types';

// in this case, we don't need a payload property and remember payload is an
// optional property in our action creator
export const toggleCart = () => (
    {
        type : CartActionTypes.TOGGLE_CART
    }
);

// GO TO CART.REDUCER.JS


// -- Mark 1 --
// lecture 110: Cart Item Reducer
// let's create our addItem action creator below and the item argument will be the
// item we're trying to add into our CartDropdown component or our cartItem array
// inside our cart reducer and let's bring this action creator into our CartIcon
// component so we can use it so let's go to
// COMPONENTS/COLLECTION-ITEM/COLLECTION-ITEM.COMPONENT.JSX - MARK 2
export const addItem = ( item ) => (
    {
        type    : CartActionTypes.ADD_ITEM,
        payload : item
    }
);
// End of -- Mark 1 --


// -- Mark 2 --
// lecture 126: Remove Items From Cart
export const clearItemFromCart = ( item ) => (
    {
        type    : CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload : item
    }
);
// now let's update cart.reducer.js
// End of -- Mark 2 --


// -- Mark 3 --
// lecture 127: Remove Items At Checkout
export const removeItem = ( item ) => (
    {
        type    : CartActionTypes.REMOVE_ITEM,
        payload : item
    }
);
// now let's go to cart.reducer.js and modify our reducer
// End of -- Mark 3 --
