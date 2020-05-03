
// in order to combine all the sub reducers we need to import in " combineReducers "
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

// -- Mark 1 -- continued
// lecture 108: Implementing Redux in Cart
import cartReducer from './cart/cart.reducer';
// End of -- Mark 1 --


// -- Mark 2 --
// lecture 129: Redux Persist
// in store.js we persisted our store but now we want to persist our reducer by using
// persistReducer and from stackoverflow: " persistReducer returns an enhanced reducer
// that wraps the rootReducer you pass in and will persist that reducer's state according
// to the config you pass in. The reducers themselves are not persisted since they are
// just functions. "
import { persistReducer } from 'redux-persist';

// now import in the type of storage that we want and if we want local storage then we do the
// following: " import storage from 'redux-persist/lib/storage'; " and this will give us a
// local storage object in the browser or in other words we are essentially telling redux
// persist that we want to use local storage as our default storage

// alternatively, we could also use session storage as our default storage by writing
// " import sessionStorage from 'redux-persist/lib/storage/session'; " but Yihua said we want
// to use local storage for our app so we'll stick with the following:
import storage from 'redux-persist/lib/storage';


// -- Mark 3 --
// lecture 130: Directory State Into Redux
import directoryReducer from './directory/directory.reducer';
// End of -- Mark 3 --


// -- Mark 4 --
// lecture 131: Collection State Into Redux
import shopReducer from './shop/shop.reducer';
// End of -- Mark 4 --


// next we have to define a new persist configuration and this is just an object that represents
// the configurations that we want to use for persistReducer and remember: " persistReducer
// returns an enhanced reducer that wraps the rootReducer you pass in and will persist that
// reducer's state according to the config you pass in "
const persistConfig = {
    // and " key : 'root' " tells our reducer object to store everything starting at the root
    // level and then for storage we want to use local storage
    key       : 'root',
    storage   : storage,
    // whitelist tells redux persist what reducers we want to persist and since our user reducer
    // is being handled by Firebase authentication there is no reason for us to persist the user
    // reducer but we do want to persist the cart reducer so we pass the cart reducer into the
    // array as a string or as 'cart' and this let's redux persist know that the only reducer we
    // want to whitelist or the only reducer that we want to have persistent state is the cart
    // reducer

    // and later if we add new reducers to our combineReducers() call then we will most likely
    // want to add those reducers to our whitelist array as well
    whitelist : [ 'cart' ]
};

// Yihua said that he knows there was a lot of configuration with redux persist and this might
// seem a little odd and next we will create the rootReducer and wrap combineReducers
// inside rootReducer and then remember to comment out combineReducers below


// -- Mark 3 -- continued
// lecture 130: Directory State Into Redux
// add the directory reducer below

// -- Mark 4 -- continued
// lecture 131: Collection State Into Redux
// add the shop reducer below

const rootReducer = combineReducers(

    {  
        user      : userReducer,
        cart      : cartReducer,
        directory : directoryReducer,
        shop      : shopReducer
    }

);
// End of -- Mark 3 and Mark 4 --

// and then export our persistReducer and pass in as arguments to persistReducer
// both persistConfig and rootReducer and what we are exporting is a modified version
// of our root reducer and now this modified version has persistent capabilities and now go
// to index.js
export default persistReducer( persistConfig, rootReducer );
// End of -- Mark 2 --


// we are going to export out combindReducers as the default value and combineReducers
// will return one giant object and this object is bound with all the redux functionality
// that we want
/*
export default combineReducers(

    {  
        user : userReducer,
        cart : cartReducer
    }

);
*/

// in the next lecture, we will bring our root reducer into our store and create some
// additional actions so that we can flesh out the first redux feature inside our
// application