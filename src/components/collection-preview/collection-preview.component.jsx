

// ==============================
// Component Tree Structure
// ==============================
// App                    - React Router
//   Shop Page            - Class and State
//   Shop Data            - Data
//     Collection-Preview - Functional and Presentational
//       Collection-Item  - Functional and Presentational


import React from 'react';
import './collection-preview.styles.scss';
// -- Mark 1 --
// lecture 70: Collection Item
// import in the CollectionItem component
import CollectionItem from '../collection-item/collection-item.component';


// declare a function component and implicitly return some jsx
const CollectionPreview = ( { title, items } ) => (
    // add an outer div that contains our collection
    // inside the div with a class name of "preview", we will map over the items and then
    // return a div with a key and an item name and then limit the number of item names
    // to 4 and do this by using the filter method and filter is exactly as it sounds, we want
    // to filter out the elements in our array based off the function we pass to the
    // filter() call and filter, like map, will give us back a new array and what we
    // return from inside the filter call will be a true or false value and if the expression
    // evaluates to true then that item will be added to the new array and if the expression
    // evaluates to false then that item will be not be added to the new array, in other
    // words it will be filtered out and filter takes 3 arguments: item, index and array
    // and the methods chained together below ( i.e. filter and map ) are read from left
    // to right or filter is read first and then map is read second

    // bear in mind that every we rerender this component the filter and map methods will be
    // called again and this could become a performance concern depending on how large the
    // arrays are or how slow someone's computer may be

    // in the next section, we are going to style all this stuff
    <div className="collection-preview">

        <h1 className="title">{ title.toUpperCase() }</h1>

        <div className="preview">
            {
                items
                .filter( ( item, index ) => index < 4 )
                // -- Mark 1 --
                // lecture 70: Collection Item
                // change div to CollectionItem and then destructure our item key value pairs so
                // instead of ( item ) we will have ( id, ...otherItemProps ) and spread out our
                // other item key value pairs using the spread operator and ...otherItemProps would
                // represent name={ name } imageUrl={ imageUr } price={ price }
                .map( ( { id, ...otherItemProps } ) => (
                    <CollectionItem
                        key={ id }
                        { ...otherItemProps }
                    />
                ))
            }
        </div>

    </div>
);

// create a default export for our functional component, CollectionPreview
export default CollectionPreview;