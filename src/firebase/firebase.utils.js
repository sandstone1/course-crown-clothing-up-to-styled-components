
// below we are importing in the firebase utility library and the keyword " firebase "
// below will give us access to the firestore and authentication but remember to get
// access to the firestore and authentication we have to also import in firestore and
// authentication as shown below

// from Firebase: " A Firebase App holds the initialization information for a collection
// of services. "

// from Firebase: " firebase is a global namespace from which all Firebase services are
// accessed. "

// Google recommends you don't import from 'firebase' as a whole but instead import from
// 'firebase/app', which is the base firebase library  and then import the individual
// packages below this command or in our case, we want access to the database and
// authentication services so we import 'firebase/firestore' and 'firebase/auth'
import firebase, { initializeApp } from 'firebase/app';
// import in the database
import 'firebase/firestore';
// import in authentication
import 'firebase/auth';


// next, set config equal to our application's Firebase configuration
const config = {
    apiKey            : "AIzaSyBOuD7LZ0xv_2LQmvmaZw7QL2o-WWaJa7o",     // Auth / General Use
    authDomain        : "crown-clothing-25f2b.firebaseapp.com",        // Auth with popup/redirect
    databaseURL       : "https://crown-clothing-25f2b.firebaseio.com", // Realtime Database
    projectId         : "crown-clothing-25f2b",
    storageBucket     : "crown-clothing-25f2b.appspot.com",            // Storage
    messagingSenderId : "729289960047",                                // Cloud Messaging
    appId             : "1:729289960047:web:738d376772a4583792bb9a"
};


// from Firebase: " function initializeApp => Creates and initializes a Firebase app instance. "
// from Firebase: " Initialize default app " by doing the following:
firebase.initializeApp( config );

// this next part may seem confusing at first but will make more sense as we start using it

// from Firebase: " firebase.auth() can be called with no arguments to access the default app's
// Auth service or as firebase.auth( app ) to access the Auth service associated with a specific
// app "

// from Firebase: " Get the Auth service for the default app "
// " var defaultAuth = firebase.auth(); "

// from Firebase: " Get the Auth service for a given app "
// " var otherAuth = firebase.auth( otherApp ); "

// for Google authentication we need to type the following:
export const auth = firebase.auth();

// we want to export the const " auth " or the auth service for the default app to anywhere
// else in our application where we need authentication

/*
COULD HAVR DONE THIS INSTEAD ( I think ):
import firebase from 'firebase/app';
import 'firebase/auth'
const app = firebase.initializeApp( config );
export const auth = app.auth();
*/

// for our database, let's type the following:
export const firestore = firebase.firestore();

// now we can export our database service to anywhere else in our application where
// we need a database

// now, let's set up our Google authentication utility and type the following:

// from the Firebase site: " You can let your users authenticate with Firebase using their
// Google Accounts by integrating Google Sign-In into your app. You can integrate Google Sign-In
// either by using the Firebase SDK to carry out the sign-in flow, or by carrying out the
// Google Sign-In flow manually and passing the resulting ID token to Firebase. "

// from the Firebase site: "If you are building a web app, the easiest way to authenticate your
// users with Firebase using their Google Accounts is to handle the sign-in flow with the
// Firebase JavaScript SDK. (If you want to authenticate a user in Node.js or other non-browser
// environment, you must handle the sign-in flow manually.) "

// from the Firebase site: "To handle the sign-in flow with the Firebase JavaScript SDK, follow
// these steps:

// 1. Create an instance of the Google provider object "
const provider = new firebase.auth.GoogleAuthProvider();

// and this gives us access to this new Google auth provider class on the authentication library
// and provider takes a couple custom parameters using the setCustomParameters() method and one
// of the parameters is " prompt : 'select_account' " and this parameter will always trigger the
// Google pop up whenever we use the Google Auth Proovider for authentication and / or sign in

// from the Firebase site: "4. Optional: Specify additional custom OAuth provider parameters that
// you want to send with the OAuth request. To add a custom parameter, call setCustomParameters
// on the initialized provider with an object containing the key as specified by the OAuth
// provider documentation and the corresponding value. "
provider.setCustomParameters( { prompt : 'select_account' } );

// let's also export the signInWithGoogle method and in the arrow function below we will return
// auth.signInWithPopup( provider ) so signInWithGoogle with equal the return value from
// auth.signInWithPopup( provider ) and signInWithPopup() will take a Twitter version as an
// argument, for example, but for our purposes we are only concerned with signing in with
// Google

// from the Firebase site: "5. Authenticate with Firebase using the Google provider object. You
// can prompt your users to sign in with their Google Accounts either by opening a pop-up window
// or by redirecting to the sign-in page. The redirect method is preferred on mobile devices.
// To sign in with a pop-up window, call signInWithPopup: "
export const signInWithGoogle = () => auth.signInWithPopup( provider );

// from the Firebase site: ( we could have done something like this as well )
/*
firebase.auth().signInWithPopup( provider ).then( function( result ) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch( function( error ) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

// " Also notice that you can retrieve the Google provider's OAuth token which can be used to fetch
// additional data using the Google APIs. 

// This is also where you can catch and handle errors. For a list of error codes have a look at
// the Auth Reference Docs. "
*/

// now let's configure our Firebase project to use Google sign in and to do that let's go back to
// our firebase project and then click the " Authentication " item under the " Develop " section

// and we will be taken to a page that says " Authenticate and manage users from a variety of
// providers without server-side code "

// and then click the button that says " Set up sign-in method " and we will go to a new page
// that lists " Sign-in providers "

// Sign-in providers include:
// Email/Password, phone, Google, FB, Twitter, GitHub, Yahoo, Microsoft and Apple

// and under the Google option we will click on the edit pencil and then a model will appear
// that says: " Google sign-in is automatically configured on your connected iOS and web apps.
// To set up Google sign-in for your Android apps, you need to add the SHA1 fingerprint for
// each app on your Project Settings. "

// and then enable this option and add in the " Project support email " and usually this email is
// the email from your Google account or the email you used to sign into Firebase initially and
// then we click on the " Save " button and now we have oAuth enabled for our porject when the
// user uses his Google email to sign in

// now let's go to our Sign In component and import in the named export " signInWithGoogle " so
// that our sign in page has OAuth capabilities when a user signs in with his or her gmail account
// GO TO => SRC/COMPONENTS/SIGN-IN/SIGN-IN.COMPONENT.JSX

// also, let's export the firebase library below just in case we want to access the whole library
// in another file
export default firebase;


