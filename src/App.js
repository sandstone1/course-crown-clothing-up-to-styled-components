
import React from 'react';
import './App.css';

// -- Mark 1 --
// lecture 57: E-commerce Homepage + SASS Setup

// -- Mark 2 --
// lecture 61: Homepage and Directory Components
import HomePage from './pages/homepage/homepage.component';
// End of -- Mark 2 --

// -- Mark 3 --
// lecture 65: Routing in Our Project
import { Route, Switch } from 'react-router-dom';

// -- Mark 4 --
// lecture 69: Shop Page
import ShopPage from './pages/shop/shop.component';

// -- Mark 5 --
// lecture 71: Header Component
import Header from './components/header/header.component';
// End of -- Mark 5 --

// -- Mark 6 --
// lecture 74: Sign In Component
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// End of -- Mark 6 --

// -- Mark 7 --
// lecture 83: Google Sign In Authentication 2
// we import in the named export " auth " since we want to store the state of our user in App.js
// and we want to do this no matter what service they use, whether that be sign in with your
// Google account or sign in with your email and password and we want to be able to pass the state
// of our user into the components that need it or we want to access our current user object
// throughout our application so convert our App below to a class component
import { auth } from './firebase/firebase.utils';
// End of -- Mark 7 --


// -- Mark 4 -- continued
// comment out HatsPage
/*
// make am example component that represents another page outside of our HomePage component
const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);
// End of -- Mark 3 --
*/
// End of -- Mark 4 --


// include our <HomePage /> component below and then we need to go to the terminal and type
// " npm start " to start the project and after we press enter we will be automatically taken
// to localhost:3000, which includes our component App.js
// End of -- Mark 1 --

// -- Mark 7 -- continued
// lecture 83: Google Sign In Authentication 2
// convert " function App() { } " to " class App extends React.Component { } "
// End of -- Mark 7 --
class App extends React.Component {
    
    // -- Mark 7 -- continued
    // lecture 83: Google Sign In Authentication 2
    // put return() inside render() {}

    // add in state
    state = {
        currentUser : null
    }

    // see notes below
    // here we are setting a property called unsubscribeFromAuth on our class component or
    // on " App " and setting the property eqaul to null
    unsubscribeFromAuth = null;

    // to understand what Firebase auth gives us we have to understand the concept of subscription
    // and before if we wanted to fetch data from the backend we would use the componentDidMount()
    // method but doing it this way is only good for a one off situation but we don't want to
    // remount our app, we just always want to know when the authentication state of a user has
    // changed so we want to know whenever a user signs in or signs out so let's use " auth " or
    // the auth library and call the onAuthStateChanged method on auth and we will do this inside
    // the componentDidMount method
    componentDidMount() {
        // inside onAuthStateChanged we will call a function and the argument will be a " user "
        // and we will update state based on the user argument, which is an object

        // " this.unsubscribeFromAuth " will equal a function and when we call this function we
        // will close the subscription that we created below and we close the subscription
        // in componentWillUnmount below
        this.unsubscribeFromAuth = auth.onAuthStateChanged( ( user ) => {
            this.setState( { currentUser : user } );

            // let's log out user to see what it looks like and now when we go back into our
            // application and go to the counsel, we will see our user object in the counsel
            // which looks like:
            // " Q {I: Array(0), l: "AIzaSyBOuD7LZ0xv_2LQmvmaZw7QL2o-WWaJa7o", m: "[DEFAULT]",
            // o: "crown-clothing-25f2b.firebaseapp.com", a: ni, …} "
            // and this user is the same user I signed in with last night and even though we
            // refreshed the page we get user authenticated session persistance with Firebase
            // and even if we close the window for localhost:3000/signin and type in the same
            // URL in a new window our user object will still persist and in the case below
            // we can see the user object in the console and Firebase will continue to send our
            // app the user authenticated object until the user signs out and this is a great
            // feature of Firebase because we are able to get persistence of our user session
            // without having to do any seperate set up

            // let's take another look at the user object in the console and the main keys we
            // want to look at are the " displayName " and " email " and Firebase gives us OAuth
            // right out of the gate and OAuth allows users to sign in with any third party
            // service that they might already have and by doing this we have reduced the
            // barrier of entry for allowing users to sign into our application since users
            // don't need to go through an arduous sign up process or remember their email
            // and password in order to sign into our app and OAuth is a very difficult and
            // tedious thing to set up from scratch but with Firebase we get access to OAuth
            // with just a couple configuration settings and this is why Firebase is such an
            // incredible platform

            // now, the next thing we have to do is understand why this is an open subscription
            // so the function we are currently in " auth.onAuthStateChanged( ( user ) => { } "
            // is an open messaging system between our application and Firebase and this means
            // that whenever any changes occur on Firebase from any source and those changes are
            // related to this application then Firebase will send out a message that the auth
            // state has changed and this auth state change could be the user signing in or the
            // user signing out and this connection is always open as long as our application
            // component is mounted on our DOM and remember that since this is an open
            // subscription we also need to close the subscription when the application component
            // unmounts in order to prevent memory leaks and to do that go to
            // " unsubscribeFromAuth = null " above and then go to componentWillUnmount below
            console.log( user );
        } );
    }

    // this method will allow us to unsubscribe from OAuth when the application component
    // unmounts
    componentWillUnmount() {
        // and we ubsubscribe from the subscription or close the subscription by calling
        // this.unsubscribeFromAuth()
        this.unsubscribeFromAuth();
    }

    // in summary, the above is how we make our application aware of any auth changes on
    // Firebase and this will all make more sense as we use Firebase authentication
    // End of -- Mark 7 --

    render() {

        return (
            // -- Mark 3 -- continued
            // lecture 65: Routing in Our Project
            // our Route component takes 3 primary arguments: path, exact and component and replace
            // <HomePage /> below with <Route /> and component will be the component that we want the
            // Route to render and path will be a string that represents our url location and when we
            // are on the home page the path will just equal "/" or " localhost:3000 " or
            // " localhost:3000/ " which is the base url location for our app and exact is a true
            // or false property and " exact " is the same as " exact={ true } " and exact just means
            // that the path must match exactly otherwise react router will move on to the next Route
    
            // now wrap our Route component(s) inside our Switch component and will go through the
            // Routes one by one and the stop when it gets to a path match
    
            // -- Mark 4 --
            // lecture 69: Shop Page
            // change " <Route path="/hats" component={ HatsPage } /> " to " <Route path="/shop"
            // component={ ShopPage } /> " and now when we navigate to our shop page or
            // " localhost:3000/shop " we should see what is currently inside the render() {} or
            // " SHOP PAGE " and this is exactly what I see so our app is working correctly and next
            // we need to build the preview collection component and let's add a folder inside the
            // components folder called " collection-preview " and inside that folder let's add
            // a file called " collection-preview.component.jsx " and a file called
            // " collection-preview.styles.sass " and go to the file: collection-preview.component.jsx
    
            // -- Mark 5 --
            // lecture 71: Header Component
            // place the Header component outside the Switch and Route components and by doing this
            // the Header component will be rendered on every page, which is what we want and we can
            // do the same thing for pop ups, overlays and footers and being able to place
            // components outside our Switch component makes our app very intuitive and if we go to
            // our application, we can see the header and the header is unstyled right now
    
            // -- Mark 6 --
            // lecture 74: Sign In Component
            // add in a route for the Sign In and Sign Up page

            // -- Mark 8 --
            // lecture 85: Google Sign In Authentication 3
            // first we need to make sure that our header is aware of when the user is signed in
            // and when the user is signed out and we do that by passing the app currentUser
            // state to the <Header /> component below and we pass currentUser in as a prop
            // and this.state.currentUser could be (1) null or could be (2) a user object
            // and now go to our <Header /> component
            <div>
                <Header currentUser={ this.state.currentUser } />
                <Switch>
                    <Route path="/"     exact={ true } component={ HomePage             } />
                    <Route path="/shop"                component={ ShopPage             } />
                    <Route path="/signin"              component={ SignInAndSignUpPage  } /> 
                </Switch>        
            </div>
            // End of -- Mark 3 and Mark 4 and Mark 5 and Mark 6 and Mark 7 and Mark 8--
        );

    }
}

export default App;
