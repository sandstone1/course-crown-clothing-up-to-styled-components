
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


function App() {
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
        <div>
            <Switch>
                <Route path="/"     exact={ true } component={ HomePage } />
                <Route path="/shop"                component={ ShopPage } />
            </Switch>        
        </div>
        // End of -- Mark 3 and Mark 4 --
    );
}

export default App;
