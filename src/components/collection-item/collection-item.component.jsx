

// ==============================
// Component Tree Structure
// ==============================
// App                    - React Router
//   Shop Page            - Class and State
//   Shop Data            - Data
//     Collection-Preview - Functional and Presentational
//       Collection-Item  - Functional and Presentational


import React from 'react';
// import in the style sheet
import './collection-item.styles.scss';

// don't need any state so make another functional component
const CollectionItem = ( { id, name, imageUrl, price } ) => (

    <div className="collection-item">

        <div 
            className="image"
            // add our style directly inside our <div>
            style={
                {
                    // we have to do something like this for our image:
                    // " background-image: url("paper.gif"); "
                    backgroundImage : `url( ${ imageUrl } )`
                }
            }
        >
        </div>

        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>

    </div>

);

export default CollectionItem;