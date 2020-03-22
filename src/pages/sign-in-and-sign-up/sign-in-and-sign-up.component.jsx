
import React from 'react';

import './sign-in-and-sign-up.styles.scss';

// -- Mark 1 --
// lecture 74: Sign In Component
import SignIn from '../../components/sign-in/sign-in.component';
// End of -- Mark 1 --

// -- Mark 2 --
// lecture 92: Sign Up Component
import SignUp from '../../components/sign-up/sign-up.component';
// End of -- Mark 2 --

// will use a functional component and our state for the sign in and sign up page will
// live inside the sign in component and the sign up component, respectively
const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
