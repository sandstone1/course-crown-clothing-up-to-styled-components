

// ==============================
// COMING FROM SRC/INDEX.JS
// ==============================

// now a reducer is a function that get 2 properties or arguments: state and an action
// and state represents the last state or the initial state and the action is an object
// that has a type property and the type property has a string value and the action may
// or may not have something called a payload or payload property and the value to payload
// can be pretty much anything and we use it to update our state so we might pass an object
// that we set as the value in our state or we might use the payload value to make some
// transformations on our state and this is all actions are, they have these 2 properties:
// type and payload

// the state argument below is going to be something that the store will pass to this reducer
// and this will happen whenever an action fires

// remember we need to set an initial state and this will be an object that represents the
// initial state of the user and let's use our inital state object in App.js or
// " currentUser : null "
const INITIAL_STATE = {

    currentUser : null

};

// below we will use initial state as the default parameter value or " state = INITIAL_STATE "
// and what this means is that if state is ever undefined, meaning that if state is not set
// then state will fall back on the default parameter or INITIAL_STATE in this case and 
// INITIAL_STATE will become the value for state

// remember if we don't get an action.type that is relevant to the userReducer ( because the
// userReducer will see all actions ) then we want to return the state

// the case we care about for the userReducer is " SET_CURRENT_USER " so whenever
// SET_CURRENT_USER is the action type that gets fired we then want to return a new object
// which will represent the new state that our userReducer will transform into

const userReducer = ( state = INITIAL_STATE, action ) => {

    switch ( action.type ) {

        case 'SET_CURRENT_USER' :
            return {
                // this format will create a new state object with an updated key value
                // pair of " currentUser : action.payload "
                ...state,
                currentUser : action.payload
            };

        default :
            return state;
    }

}

export default userReducer;

// now we need to bring our userReducer into our root reducer


// ==============================
// GO TO SRC/REDUX/ROOT-REDUCER.JS
// ==============================