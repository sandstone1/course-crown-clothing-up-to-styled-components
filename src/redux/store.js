
// import in the createStore function and the applyMiddleware function
import { createStore, applyMiddleware } from 'redux';

// remember that we need to apply middleware to our store so that whenever actions get
// fired or dispatched we can catch them and then display them and remember middleware is the
// piece in between our actions and our root reducer and remember middleware is really
// just a function that receives some action and does something to the action and then passes
// the result to the root reducer

// the redux logger library that we installed is just a piece of middleware and what it does is
// it catches the action and then console logs out the action for us and we need to import this
// functionality into the store and we do that by typing the following:
import logger from 'redux-logger';

// once we have imported in these required libraries then we import in our root reducer and even
// though we did " export default combineReducers " in root-reducer.js, we can call
// combineReducers " rootReducer " when we import in combineReducers
import rootReducer from './root-reducer';

// now let's set up our middleware and the middleware the store is expecting from redux is
// going to be an array and we do that by typing the following:
const middlewares = [ logger ];

// now let's create our store and our store will be equal to the createStore function and the
// createStore() function will take 2 arguments: rootReducer and the return value of
// applyMiddleware and inside applyMiddleware we will spread in " middlewares " and what this
// will do is spread in all the values in the middlewares array into the applyMiddleware function
// call as individual arguments and this way if we ever need to add more values to the
// applyMiddleware function call then we all we have to do is just add values to the middlewares
// array

// remember this would work as well: " applyMiddleware( logger ) " because we only have one
// middleware right now ( i.e. logger ) and having that middleware as the only argument would
// work but remember applyMiddleware() can take an infinite number of middlewares as function
// call arguments but we will do it this way for now because in the future we may want to modify
// the middlewares array above and this format makes our code more scalable
const store = createStore( rootReducer, applyMiddleware( ...middlewares )  );

// now export our store as the default value
export default store;

// and then with this new store object that we instantiated with the createStore function we
// will export our store into the index.js file and pass the store into the Provider component
// which will allow the Provider component to pass the store context to the rest of the
// application and this will allow us to dispatch actions to the store or we can pull values
// off of the store and put these values into our components


// ==============================
// GO TO SRC/INDEX.JS
// ==============================

