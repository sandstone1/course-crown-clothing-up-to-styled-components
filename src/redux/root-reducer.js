
// in order to combine all the sub reducers we need to import in " combineReducers "
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';


// -- Mark 1 -- continued
// lecture 108: Implementing Redux in Cart
import cartReducer from './cart/cart.reducer';
// End of -- Mark 1 --

// we are going to export out combindReducers as the default value and combineReducers
// will return one giant object and this object is bound with all the redux functionality
// that we want
export default combineReducers(

    {  
        user : userReducer,
        cart : cartReducer
    }

);

// in the next lecture, we will bring our root reducer into our store and create some
// additional actions so that we can flesh out the first redux feature inside our
// application