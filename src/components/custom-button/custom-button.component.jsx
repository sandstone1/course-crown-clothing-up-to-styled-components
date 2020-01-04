
import React from 'react';
import './custom-button.styles.scss';

// what is props.children?
// answer: "Here’s an example of a stateless function that is used to create a component.
// Again, since this is a stateless function, there is no 'this' keyword so just use
// props.children

/*
const Picture = (props) => {
    return (
      <div>
        <img src={props.src}/>
        {props.children}
      </div>
    )
}
*/

// This component contains an <img> that is receiving some props and then it is displaying
// {props.children}.  Whenever this component is invoked {props.children} will also be
// displayed and this is just a reference to what is between the opening and closing tags
// of the component.

// in App.js:
/*
render () {
  return (
    <div className='container'>
      <Picture key={picture.id} src={picture.src}>
          //what is placed here is passed as props.children  
      </Picture>
    </div>
  )
}
*/

// remember, the destructured values are coming from the SignIn component since that is
// where we're using our CustomButton component

// let's destructure props.children or { children } and { children } will display whatever is
// in between the opening and closing tags of the component or the CustomButton component or
// <CustomButton type="submit">Sign in</CustomButton> in our case and therefore { children }
// will display " Sign in " in this example

// we will also destructure all the other properties inside <CustomButton> in the SignIn
// component and therefore " type="submit" " will be available to use in the button element
// below since we destrutured all the other properties through the use of ...otherProps
// or { ...otherProps } in the arrow function below

// -- Mark 1 --
// lecture 85: Google Sign In Authentication 3
// we are going to conditionally render a class name in <button> below based off a prop
// in the arguments to CustomButton and that argument will be " isGoogleSignIn " and then
// in the button element we will conditionally render a class depending on whether or not
// isGoogleSignIn true or false and if isGoogleSignIn is true then we will render the class
// " google-sign-in " otherwise we will render an empty string and remember we always render
// the class " custom-button " and remember since we are using `` we have to take the ""
// off custom button in order for the custom-button class to be a valid class and now let's
// go to the custom button stylesheet or custom-button.styles.scss and 
// remember that the destructured isGoogleSignIn prop comes from the SignIn component
// End of -- Mark 1
const CustomButton = ( { isGoogleSignIn, children, ...otherProps } ) => (
    // remember, clicking on a button element and / or  an input element will trigger the
    // onSubmit property that is located inside our form element ( which is inside the SignIn
    // component ) as long as both the button and input elements have their type attribute set
    // equal to " submit " or " type = "submit" "
    <button
      className={ `${ isGoogleSignIn ? "google-sign-in" : '' } custom-button` } { ...otherProps }
    >
        { children }
    </button>
);

export default CustomButton;

// go to the SignIn component to import our CustomButton component