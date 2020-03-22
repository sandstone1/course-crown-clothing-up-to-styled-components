
import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import auth and createUserProfileDocument from firebase because we are authenticating and
// creating new users
import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils';

// we need to create a class based component because just like the sign in component we
// need to store what the user is typng into the form input
class SignUp extends React.Component {

    // state will represent the form field categories
    state = {
        displayName     : '',
        email           : '',
        password        : '',
        confirmPassword : ''
    }

    // handleSubmit will be an async function 
    handleSubmit = async ( e ) => {
        // we add e.preventDefault since we want full control over the form submission
        e.preventDefault();

        // let's destructure our state object
        const { displayName, email, password, confirmPassword } = this.state;

        // let's do some validation and first check to see if password is not strictly equal to
        // confirmPassword; in other words, they don't match
        if ( password !== confirmPassword ) {

            alert( "Password does not match confirm password. Please try again." );

            // if password does not equal confirm password then we want to return from this
            // function and do anything else until the user correct the password issue
            return;

        }

        // now we will do a try catch block
        try {
            // inside our try block we are going to use a new auth method that comes
            // with our auth library and we will destructure the user or get the user
            // off the return of the await auth.createUserWithEmailAndPassword( email, password )
            // and what this does is creates a new user account with the specified
            // email address and password and on the successful creation of the user account,
            // the user will be signed into the application and the creation of the user account
            // can fail if the account already exists or the password is not valid

            // now we will get back a userAuth object and the userAuth object will be attached to
            // the key " user ", which is why we want to destructure " user "

            // we will pass the arguments: " email " and " password " to the
            // createUserWithEmailAndPassword function and email and password come from
            // destructuring our state object above
            const { user } = await auth.createUserWithEmailAndPassword( email, password );

            // once we get " user " back we want to run the createUserProfileDocument()
            // method and we want to pass in the following arguments: " user " and the
            // " displayName " object and in this case displayName is the key and the key
            // has a corresponding value
            await createUserProfileDocument( user, { displayName } );

            // now if " createUserProfileDocument( user, { displayName } ); " succeeds then
            // we are going to want to update our state so let's change
            // " createUserProfileDocument( user, { displayName } ); " to
            // " await createUserProfileDocument( user, { displayName } ); " so we are going
            // to await for this " createUserProfileDocument( user, { displayName } ); " to
            // finish running and when it does then we will run this.setState(); and we
            // want to set state equal to our initial state object and we do this because
            // after submitting the form we want to clear the form
            this.setState(
                {
                    displayName     : '',
                    email           : '',
                    password        : '',
                    confirmPassword : ''
                }
            );

        } catch ( error ) {
            // if there is an error, we want to console log the error and a commentor from
            // stackoverflow explains the difference between console.log() and console.error():
            // " console.error() writes to stderr, whereas console.log() writes to stdout as
            // described in the doc. The presumption is that console.error() may contain more
            // serious information that you might want to look at separately "

            // so we want to throw an error if we can't fetch
            // " auth.createUserWithEmailAndPassword( email, password ); "
            // or we can't create the user profile document with
            //" createUserProfileDocument( user, { displayName } ); "
            console.error( error );

        }

    }

    // now, let's write our handleChange method and this method will be identical to our
    // sign in handleChange method
    handleChange = ( e ) => {
 
        this.setState( { [ e.target.name ] : e.target.value } );

    }

    render() {

        return (
            
            // our sign up form will be very similar to our sign in form
            <div className="sign-up">

                <h2 className="sign-up--title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up--form" onSubmit={ this.handleSubmit } >

                    <FormInput
                        name="displayName"
                        type="text"
                        label="Display Name"
                        value={ this.state.displayName }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={ this.state.confirmPassword }
                        handleChange={ this.handleChange }
                        required
                    />

                    <div className="sign-up--button">
                        <CustomButton
                            type="submit"
                        >
                            SIGN UP
                        </CustomButton>
                    </div>

                </form>                
                
            </div>

        );

    }

}

export default SignUp;

// now go to our sign-in page or sign-in-and-sign-up.component.jsx and
// render out our SignIn component on that page