
import React from 'react';
import './sign-in.styles.scss';

// -- Mark 1 --
// lecture 74: Sign In Component
import FormInput from '../form-input/form-input.component';
// End of -- Mark 1 --

// -- Mark 2 --
// lecture 76: Custom Button Component
import CustomButton from '../custom-button/custom-button.component';
// End of -- Mark 2 --

// -- Mark 3 --
// lecture 81: Google Sign In Authentication
// import in the sign in with Google authentication functionality
import { signInWithGoogle } from '../../firebase/firebase.utils';
// End of -- Mark 3 --


// we need to use a class component here since we need to store what the users
// are typing into the form fields
class SignIn extends React.Component {

    state = {
        email    : '',
        password : ''
    };

    handleSubmit = ( e ) => {
        // we add e.preventDefault since we want full control over the form submission
        e.preventDefault();

        this.setState( { email : '', password : '' } );
    }

    handleChange = ( e ) => {
        // we will use destructuring to pull a value and a name off our event target and
        // the value will correspond to " value={ this.state.email } " and 
        //" value={ this.state.password } " and the name will correspond to " name="email" "
        // and " name="password" "
        const { value, name } = e.target;

        // so if name = email and the value was " tex " then setState would
        // equal " email : tex " and we put [ ] around name because as anwsered in StackOverflow: 
        // " This will handle multiple elements of form as an array and no need to set each
        // individual element "
        this.setState( { [ name ] : value } );
    }

    render() {
        // return a div that contains our entire sign-in component and the email
        // and password form input elements will be their own custom components and
        // remember to set an onChange event on the 2 input fields below


        // -- Mark 1 -- continued
        // lecture 74: Sign In Component
        // change " input " to " FormInput " and within the FormInput component change
        //" onChange={ this.handleChange } " to " handleChange={ this.handleChange } " and
        // add " label="email" " and " label="password " "
        // and remove " <label>Email</label> " and " <label>Password</label> " below
        // End of -- Mark 1 --

        // -- Mark 2 -- continued
        // lecture 76: Custom Button Component
        // replace the input element with our CustomButton component and remove
        // " value="Submit Form" " and in between <CustomButton></CustomButton>
        // add " Sign in " and this will be picked up in the CustomButton component since
        // we are using props.children or { children }

        // also, add in the class name " title " for our span element below so we can style
        // this element
        // End of -- Mark 2 --

        // -- Mark 3 --
        // lecture 81: Google Sign In Authentication
        // add in a new CustomButton element below the following CustomButton element:
        // " <CustomButton type="submit">Sign in</CustomButton> " and the new element will be as
        // follows:
        // " <CustomButton onClick={ signInWithGoogle }>{' '}Sign in with Google{' '}
        // </CustomButton> " and now when we click the " Sign in with Google " button on our
        // sign in page, a modal will pop up that allows us to sign in with our Google account
        // or more specially the modal will load a list of Google accounts that we have and
        // then we can click on or select one of our Google accounts and Firebase will handle
        // the authentication for us and just like that we have authentication with Google
        // tied into our application and next we will learn how to handle our new logged in
        // users
        // End of -- Mark 3 --

        // -- Mark 4 --
        // lecture 85: Google Sign In Authentication 3
        // now we want to add the isGoogleSignIn property to the second custom button element
        // and if we don't pass a value to the isGoogleSignIn property then the isGoogleSignIn
        // property will automatically get evaluated to true, which is what we want and now if
        // we look at our app we see we have our styling on the second custom button element
        // and now wrap our <CustomButton> components inside a div with a class name of 
        // " buttons "

        // and now go to our sign in component style sheet or sign-in.styles.scss and match
        // the styles closer to the final app styles
        // End of -- Mark 4 --
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit } >
                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton
                            type="button"
                            onClick={ signInWithGoogle }
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );

    }

}

export default SignIn;

// now go to our sign-in page or sign-in-and-sign-up.component.jsx and
// render out our SignIn component on that page