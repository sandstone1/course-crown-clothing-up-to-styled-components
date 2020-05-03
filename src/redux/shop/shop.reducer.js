
// import in our shop data
import SHOP_DATA from "./shop.data";

// remember collections is an array of 5 objects or items and each item has key value
// pairs and one of the keys equals an array or objects and these objects are the shop
// items
const INTIAL_STATE = {

    collections : SHOP_DATA

};


const shopReducer = ( state = INTIAL_STATE, action ) => {

    switch( action.type ) {

        default:

            return state;

    }

}

// go to root-reducer.js and import in the shopReducer

export default shopReducer;