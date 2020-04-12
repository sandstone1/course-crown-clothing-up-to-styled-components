
import { CartActionTypes } from './cart.types';

// in this case, we don't need a payload property and remember payload is an
// optional property in our action creator
export const toggleCart = () => (
    {
        type : CartActionTypes.TOGGLE_CART,
    }
);

// GO TO CART.REDUCER.JS