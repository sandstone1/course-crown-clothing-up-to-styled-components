
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
import firebase from 'firebase/app';
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


// -- Mark 1 --
// lecture 89: Storing User Data in Firebase
// so the function we are going to write is going to allow us to take that user auth object
// that we got back from our authentication library and then store the key value pairs we want
// inside our database

// so the function will be called createUserProfileDocument() and this function
// will be asynchronous function because we are making an API request and we pass in our
// userAuth object that we got back from the authentication library and any additional data
// that we might need and that additional data will come in the form of an object

export const createUserProfileDocument = async ( userAuth, additionalData ) => {

    // now remember when the user signs out we get back null from our userAuth object so
    // we only want to perform this save to our database if we get back a userAuth object
    // which means that the user has signed in so the createUserProfileDocument function
    // has to check and make sure we are getting back a valid object 

    // so if the userAuth does not exist or is " null  " then we want to return from the
    // createUserProfileDocument function or exit the function and not do anything else
    if( !userAuth ) {
        return;
    }

    // if the userAuth object does exist however then we will query inside Firestore for document
    // to see if the document already exist but in order for us to do this we need to first
    // understand what we will get back from Firestore and Firestore will give us back
    // two potential objects: references or snapshots or queryReference or querySnapshot and they
    // are botht different objects that do different things in FireStore 

    // first, let's talk about what a query is and a query is simply asking Firestore for a
    // document or collection from the database and Firestore will return
    // to us 2 types of objects: references or snapshots and these can be either Document or
    // Collection versions and remember from the last lecture we called .collection() or .doc()
    // and passed in a string for the location inside the database for the collection or document
    // and we can use these objects to determine whether or not there is any data in the specific
    // database location

    // now a queryReference is simply an object that represents the current place in the database
    // that we are querying and we can get this queryReference object by calling either:
    // firestore.doc( '/users/:userId' ); or firestore.collections( '/users' );

    // remember a queryReference object does not have the actual data of the collection or document
    // instead it has properties that tell us details about collection or document or has the
    // method we need to get the Snapshot object which will give us the data we are looking for 


    // ***************


    // right now our database looks like:

    // crown-clothing-25f2b         users                       3BbNWJnDQ6KuXrz3B34I

    // + Start collection           + Add document              + Start collection

    // users >                      3BbNWJnDQ6KuXrz3B34I >      cartItems

    //                                                          + Add field

    //                                                          displayName: "Yihua"


    // ***************


    // right now our suthentication library looks like:

    // Identifier               Providers       Created         Signed In       User UID	 
    // rogerhall123@gmail.com   Google          Dec 26, 2019    Mar 14, 2020    NLszUUbnVGfP0krGUBIKUgQxC5s


    // ***************


    // so let's test this out in console.log() and we'll provide an ID that does not exist
    // so let's assume we save this file and then import createUserProfileDocument into
    // app.js
    // commented out based on changes from below
    // console.log( firestore.doc(  'users/128fdashadu') );


    // ==============================
    // GO TO SRC/APP.JS -- Mark 9
    // ==============================

    // ==============================
    // BACK FROM SRC/APP.JS -- Mark 9
    // ==============================

    // first let's move " console.log( firestore.doc( 'users/128fdashadu' ) ); "
    // below into a const of somekind or do
    // " const userRef = firestore.doc( `users/${ userAuth.uid }` ); "
    // commented out based on changes from below
    // const userRef = firestore.doc( 'users/128fdashadu' );

    // now the question is how do we get the snapshot and the way we do that
    // is by doing " const snapShot = await userRef.get(); " and we will
    // " await " the result from userRef.get();    
    // commented out based on changes from below
    // const snapshot = await userRef.get();

    // now let's log the snapshot and take a look at what were getting
    // commented out based on changes from below
    // console.log( snapshot );

    // what we get back is:
    /*
    DocumentSnapshot {_firestore: Firestore, _key: DocumentKey, _document: null,
    _fromCache: false, _hasPendingWrites: false, …}
    id: "128fdashadu"
    ref: DocumentReference
    exists: false
    metadata: SnapshotMetadata
    _firestore: Firestore {_firebaseApp: FirebaseAppImpl, _queue: AsyncQueue, INTERNAL:
    {…}, _databaseId: DatabaseId, _persistenceKey: "[DEFAULT]", …}
    _key: DocumentKey {path: ResourcePath}
    _document: null
    _fromCache: false
    _hasPendingWrites: false
    _converter: undefined
    __proto__: Object
    */

    // so we get a DocumentSnapshot object back and on in the object is a property called
    // " exists " and this property tells us whether or not we have any data in the snapshot
    // and the id property tells us the id of the document and metadata gives us information about
    // when the document was created and whether or not it is cached and whether there are any
    // pending writes, meaning anything that needs to be updated to this snapshot and ref
    // references the document reference object and remember we queried our snapshot from
    // the document reference object or we did " const snapshot = await userRef.get(); " and
    // userRef is the document reference object, I believe
    
    // now instead of using the fake id or " const userRef = firestore.doc( 'users/128fdashadu' ); "
    // what we want to the use is the userAuth uid because we want to see if the userAuth
    // object that we get back from the authentication library already exist in our database
    // so let's change userRef above from
    // " const userRef = firestore.doc( 'users/128fdashadu' ); " to
    // " const userRef = firestore.doc( `users/${ userAuth.uid }` ); "
    // and below we use string interpolation
    // from Dmitri Pavlutin: " In JavaScript, the template literals
    // ( strings wrapped in backticks `` ) and ${ expression } as a placeholder perform the
    // string interpolation " and " The expression inside the placeholder is evaluated during
    // runtime, and the result is inserted into the string " and " The placeholder has a
    // special format: ${ expressionToEvaluate }. The expression inside the placeholder can
    // be of any kind:
    // variables: ${ myVar }
    // operators: ${ n1 + n2 }, ${ cond ? 'val 1' : 'val 2' }
    // and even function calls ${ myFunc( 'argument' ) } "
    // so we use string interpolation to get the value for " userAuth.uid "
    const userRef = firestore.doc( `users/${ userAuth.uid }` );

    // and we will get back the userRef at that location and then we will get a snapshot and
    // using that snapshot we will be able to figure out whether or not there is any data
    // in that location or we will see whether or not we have already stored this user
    // object ( i.e. userAuth ) that we have previously authenticated and if we run this
    // snapShot again or:
    const snapShot = await userRef.get();
    console.log( snapShot );

    // we get the following back:
    /*
    DocumentSnapshot {_firestore: Firestore, _key: DocumentKey, _document: null,
    _fromCache: false, _hasPendingWrites: false, …}
    id: "NLszUUbnVGfP0krGUBIKUgQxC5s1"
    ref: DocumentReference
    exists: false
    metadata: SnapshotMetadata
    _firestore: Firestore {_firebaseApp: FirebaseAppImpl, _queue: AsyncQueue,
    INTERNAL: {…}, _databaseId: DatabaseId, _persistenceKey: "[DEFAULT]", …}
    _key: DocumentKey {path: ResourcePath}
    _document: null
    _fromCache: false
    _hasPendingWrites: false
    _converter: undefined
    __proto__: Object
    */

    // now we see that exist is still false but now we are getting back the same id as the id
    // we were getting back from our auth library or authentication library

    // so now that we have the " snapShot " let's check and see if the
    // snapshot exist and we do that within an if statement and please see below:
    if ( !snapShot.exists ) {
        
        // so above we are sayng if the snapShot does not exist or the data does not exist
        // then we want to actually create a piece of data in this location and we will
        // create it using our userRef object because remember in order to create or do
        // CRUD operations we have to use the DocumentReference object and not the snapshot
        // because the snapshot simply represent the data

        // so below we are basically creating a new user with informaiton from our
        // userAuth object

        // so before we create this piece of data let's determine the data we want to use
        // in order to create this document and what we want is the displayName and email
        // from our userAuth object and remember the userAuth object was that giant object
        // we logged ealier
        const { displayName, email } = userAuth;
        // and when want to know inside our database when we made that document so let's call
        // new Date(); and by doing this we are creating a new JavaScript date object and this
        // object tells us the current date and time as to when this
        // " const createdAt = new Date(); " was invoked
        const createdAt = new Date();

        // so what we are going is create a new user object with the following key value pairs
        // and we will wrap this object in a try catch block and below we will make an
        // asynchronous request to our database and store this data in our database at the
        // userRef location or " firestore.doc( `users/${ userAuth.uid }` ) " or
        // " firestore.doc( `users/NLszUUbnVGfP0krGUBIKUgQxC5s1` ); "
        try {
            // so let's await our userRef object and call .set() or the create method or the
            // " c " in the crud acronym and we will create an object with the following
            // properties: displayName, email, createdAt ( implicit in this is the
            // corresponding values ) and we will spread in any additional data that we may
            // need and remember additionalData will be an object
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
 
        } catch( error ) {
            // and if we have any issues in the try block above we will console.log
            // " error creating user " and log out an error message as well
            console.log( 'error creating user', error.message );
        }

        // so again if the snapshot does not exist then we will create data in the above
        // referenced location inside the Firestore database

        // so we are checking to see if there is any data in the userRef location or
        // " const userRef = firestore.doc( `users/${ userAuth.uid }` ); " and if there
        // isn't any data in this location then we will create a new user using data
        // from the userAuth object

    }

    // lastly make sure we return the userRef in case we need to use it later somewhere
    // else in our code base
    
    // userRef is located at " const userRef : firebase.firestore.DocumentReference; "
    return userRef;


    // ==============================
    // GO TO SRC/APP.JS -- Mark 9
    // ==============================    


}

// End of -- Mark 1 --



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


