
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

// make am example component that represents another page outside of our HomePage component
const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);
// End of -- Mark 3 --

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
        <div>
            <Switch>
                <Route path="/"     exact={ true } component={ HomePage } />
                <Route path="/hats"                component={ HatsPage } />
            </Switch>        
        </div>
        // End of -- Mark 3 --
    );
}

export default App;
