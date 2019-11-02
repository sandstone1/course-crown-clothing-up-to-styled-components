
import React from 'react';
import './menu-item.styles.scss';

// create a functional component here since we don't really need our component to hold
// any state, at least not for now and let's make our title dynamic by passing in props
// for the title or better yet we could destructure the title so instead of props.title,
// we do { title } and we destructure " title " inside the arrow function argument 
const MenuItem = ( { title, imageUrl, size } ) => (

    // in react each html element has another property we can use and that property is
    // called style and style takes an object and this object has prop values equal to
    // css values and we apply the css values to the corresponding element and the css values
    // need to be in camel case so instead of background-image we would use backgroundImage


    // -- Mark 1 --
    // lecture 63: Styling Menu Items
    // capitalize the titles by changing " <h1 className="title">{ title }</h1> "
    // to " <h1 className="title">{ title.toUpperCase() }</h1> " and create another div
    // within the container div that will hold our image because we will want our image to
    // increase when we hover over it but we don't want the content div to increase so move the
    // style object into the new div
    <div
        // to make the menu item boxes for mens and womens larger than the other 3 menu item boxes
        // we can add a class name dynamically and we will use template literals to help us do that
        // so under certain circumstances this div will have 2 class names: " large " or
        // ` ${ size } ` and " menu-item "
        className={ `${ size } menu-item` }
    >
        <div
            className="background-image"
            style={
                {
                    // we have to do something like this for our image:
                    // " background-image: url("paper.gif"); "
                    backgroundImage : `url( ${ imageUrl } )`
                }
            }
        >
        </div>
        <div className="content">

            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">SHOP NOW</span>

        </div>

    </div>
    // End of -- Mark 1 --

);

export default MenuItem;

// using props instead of desstructuring
/*
const MenuItem = ( props ) => (

    <div
        style={
            {
                backgroundImage : `url( ${ props.imageUrl } )`
            }
        }
        className={ `${ props.size } menu-item` }
    >

        <div className="content">

            <h1 className="title">{ props.title }</h1>
            <span className="subtitle">SHOP NOW</span>

        </div>

    </div>

);
*/