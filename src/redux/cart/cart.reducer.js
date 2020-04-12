
import { CartActionTypes } from './cart.types';

// set up the initial state first
const INITIAL_STATE = {
    show : false
};

const cartReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        case CartActionTypes.TOGGLE_CART :  
            return {
                ...state,
                show : !state.show
            };

        default:
            return state;

    }

}

export default cartReducer;

// GO TO COMPONENTS/CART-ICON/CART-ICON.COMPONENT.JSX - MARK 1