
// these action creator functions have to be in the right format and our
// serCurrentUser action creator function will be a function that takes one parameter and
// that parameter is the " user " object and this user object will either equal our userAuth
// object or our user snapShot object that we create inside our firebase.utils file and
// remember inside our App.js file if the userAuth object exist then our user equals the
// snapShot object and if userAuth does not exist ( i.e. the user is logged out ) then
// userAuth equals " null "

// so instead of calling this.setState(), we are going to fire off an action that holds
// the user value and then we will implicitly return the following object:
export const setCurrentUser = ( user ) => (
    {
        type    : 'SET_CURRENT_USER',
        payload : user
    }
);

// now we have created our user action and we will use this action to update our
// reducer

// in the last couple lessons we had to endure a lot of configuration or set up
// but hopefully at least conceptually it made sense and we will repeat this pattern many
// times and with redux you really need to see redux in action before all these pieces start
// to make sense but by the end this will all make sense because we are going to use redux
// a lot

// so now that we have finished our setup we are going to bring this into our components
