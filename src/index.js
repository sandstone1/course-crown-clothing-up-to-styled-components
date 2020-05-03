
import React from 'react';
import ReactDOM from 'react-dom';
// -- Mark 1 --
// lecture 65: Routing in Our Project
import { BrowserRouter } from 'react-router-dom';
// End of -- Mark 1 --
import App from './App';
import './index.css';

// -- Mark 2 --
// lecture 101: Setting Up Redux 1
// were going to import in the Provider component and we get this component from react-redux and
// this will give our application access to the store and the reducers and we want to wrap the
// Provider component around the entire application because we want our entire application
// to have access to the store
import { Provider } from 'react-redux';
// End of -- Mark 2 --


// -- Mark 3 --
// lecture 102: Setting Up Redux 2
import store from '../src/redux/store';
// End of -- Mark 3 --


// -- Mark 4 --
// lecture 129: Redux Persist
// import in a new component called PersistGate and from GitHub " PersistGate delays the
// rendering of your app's UI until your persisted state has been retrieved and saved to
// redux. " and then let's import in persistor and then let's wrap our app inside PersistGate
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../src/redux/store';
// End of -- Mark 4 --


// -- Mark 1 -- continued
// lecture 65: Routing in Our Project
// BrowserRouter is a component we are going to wrap around our application and this gives <App />
// all the functionality of routing that react-router-dom provies

// -- Mark 2 --
// lecture 101: Setting Up Redux 1
// wrap the Provider component around the entire application ( see below ) and the Provider is a
// component and the parent of everything inside our application and as the parent it allows us
// to get access to all things related to the store and remember in order for the Provider component
// to work it has to be the parent of everything

// now that we have the Provider component set up we need to add the store but first let's create
// a new folder in our src directory called " redux " and create a new file inside redux called
// " root-reducer.js " and the root reducer represents all of the state of our application and the
// root reducer will combine all of the other reducers together, creating a file that represents
// the entire state of our application and we will need multiple reducers since having all the
// state in one file will become very unwieldly

// we are also going to write the user reducer and the user reducer will store the state of our
// current user and right now we store current user in App.js but we will move this into our
// user reducer and current user will be pretty much the same type of object in the user reducer
// as it is in App.js and we will create a new folder called " user " and any redux code related
// to this user will go into this folder and inside the user folder create a new file called
// " user.reducer.js " and we do user *dot* reducer *dot* js and this format let's us know that
// this file is a reducer file

// ==============================
// GO TO SRC/REDUX/USER/USER.REDUCER.JS
// ==============================

// -- Mark 3 --
// pass " store " into the Provider component as a value and we do that as follows:
// and Yihua understands that this is a lot of configuration and probably more than we are use
// to seeing but we now have access to redux inside our application

// now we need to create action functions and we will put these action functions in a file
// called user.actions.js and remember these action functions are just functions that return
// objects but first let's create a new file inside the redux/user folder called
// " user.actions.js "

// ==============================
// GO TO SRC/REDUX/USER/USER.ACTIONS.JS
// ==============================

// End of -- Mark 3 --


// -- Mark 4 -- continued
// lecture 129: Redux Persist
// wrap " <App /> " inside the PersistGate component and we will pass in
// " persistor={ persistor } " where persistor represents the persistent version of our store
// and PersistGate will rehydrate the state whenever our application refreshes and now
// let's go to our app and see if our cart items are persisting after the page refreshes
// and / or after closing down our application tab and after I test this out I see that everything
// is working as expected and what is happening behind the scences is detailed in redux logger
// and looks like the following:
/*
redux-logger.js:377  action persist/PERSIST @ 14:29:22.384
redux-logger.js:388  prev state {user: {…}, cart: {…}}
redux-logger.js:392  action     {type: "persist/PERSIST", register: ƒ, rehydrate: ƒ}
redux-logger.js:401  next state {user: {…}, cart: {…}, _persist: {…}}

redux-logger.js:377  action persist/REHYDRATE @ 14:29:22.412
redux-logger.js:388  prev state {user: {…}, cart: {…}, _persist: {…}}
redux-logger.js:392  action     {type: "persist/REHYDRATE", payload: {…}, err: undefined, key: "root"}
redux-logger.js:401  next state {user: {…}, cart: {…}, _persist: {…}}
*/

// so what is happening is the first persist action ( i.e. " action persist/PERSIST " ) is checking
// to see whether or not anything exist in state and if something does exist inside our state
// object ( cart items in our case ) then redux persist will fire off a new action that says: " hey
// I want to hydrate the state with whatever we stored inside our preferred method of storage",
// which in our case is local storage and this happens
// in " action persist/REHYDRATE " and remember we set up our storage inside root-reducer.js so
// now after writing all this code were able to maintain cart state across sessions and this is
// really necessary in an ecommerce application
// End of -- Mark 4 --

ReactDOM.render(
    <Provider store={ store } >
        <BrowserRouter>
            <PersistGate persistor={ persistor }>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);
// End of -- Mark 1 and Mark 2 and Mark 4 --
