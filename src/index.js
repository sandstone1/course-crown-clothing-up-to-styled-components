
import React from 'react';
import ReactDOM from 'react-dom';
// -- Mark 1 --
// lecture 65: Routing in Our Project
import { BrowserRouter } from 'react-router-dom';
// End of -- Mark 1 --
import App from './App';
import './index.css';


// -- Mark 1 -- continued
// lecture 65: Routing in Our Project
// BrowserRouter is a component we are going to wrap around our application and this gives <App />
// all the functionality of routing that react-router-dom provies
ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>    
    , document.getElementById( 'root' )
);
// End of -- Mark 1 --
