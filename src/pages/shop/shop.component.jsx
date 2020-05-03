

// ==============================
// Component Tree Structure
// ==============================
// App                    - React Router
//   Shop Page            - Class and State
//   Shop Data            - Data
//     Collection-Preview - Functional and Presentational
//       Collection-Item  - Functional and Presentational


import React from 'react';
// import in the shop data
// import SHOP_DATA from './shop.data.js';


// -- Mark 3 --
// lecture 133: Nested Routing in Shop Page
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
// End of -- Mark 2 --


/*
// import in the CollectionPrview component
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


// -- Mark 1 --
// lecture 131: Collection State Into Redux
// first import in connect, createStructuredSelector and selectShopCollections and comment out
// " import SHOP_DATA from './shop.data.js'; " above
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
*/

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

// now (1) change the class based component below to a functional component or change
// " class ShopPage extends React.Component { " to
// " const ShopPage = ( { collections } ) => (" and then (2) comment out render() {} and
// return(); and then (3) comment out state = { collections : SHOP_DATA }; and (4) change:
/*
    <div className="shop-page">
    {
        this.state.collections.map( ( { id, title, items } ) => (
            <CollectionPreview
                key   ={ id }
                title ={ title }
                items ={ items }
            />
        ))
    }
    </div>
*

// to:
/*
   <div className="shop-page">
    {
        collections.map( ( { id, title, items } ) => (
            <CollectionPreview
                key   ={ id }
                title ={ title }
                items ={ items }
            />
        ))
    }
    </div>
*/

// and (5) change " export default ShopPage; " to
// " export default connect( mapStateToProps )( ShopPage ); " and (6) add mapStateToProps or:
/*
const mapStateToProps = createStructuredSelector(

    {
        collections : selectShopCollections
    }

);

// remember, we could have done this instead ( but would have lost the performance benefits of
// using selectors ):
/*
const mapStateToProps = ( state ) => (

    {
        collections : state.shop.collections
    }

);
*/

// and if I check the app I see everything is working correctly and Yihua said there are a lot
// of files here but it gets easier with practice and it just comes down to making the right
// files, calling in the right libraries and setting up the right code and Yihua said that
// all this works great but the set up is a little lengthy and now let's start building our
// category pages
// End of -- Mark 1 --


const ShopPage = ( { match } )  => (

    // need to copy and paste the collections array data from the last lecture
    // and then move the state object into its own file since it will be static
    // and this will make it easier to focus on the main thing about our shop page
    // which will be component itself and its lifecycle methods and call this file
    // shop.data.jsx
    /*
    state = {
        collections : [
            {
                id: 1,
                title: 'Hats',
                routeName: 'hats',
                items: [
                    {
                        id: 1,
                        name: 'Brown Brim',
                        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                        price: 25
                    },
                    {
                        id: 2,
                        name: 'Blue Beanie',
                        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                        price: 18
                    },
                    {
                        id: 3,
                        name: 'Brown Cowboy',
                        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                        price: 35
                    },
                    {
                        id: 4,
                        name: 'Grey Brim',
                        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                        price: 25
                    },
                    {
                        id: 5,
                        name: 'Green Beanie',
                        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                        price: 18
                    },
                    {
                        id: 6,
                        name: 'Palm Tree Cap',
                        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                        price: 14
                    },
                    {
                        id: 7,
                        name: 'Red Beanie',
                        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                        price: 18
                    },
                    {
                        id: 8,
                        name: 'Wolf Cap',
                        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                        price: 14
                    },
                    {
                        id: 9,
                        name: 'Blue Snapback',
                        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                        price: 16
                    }
                ]
            },
            {
                id: 2,
                title: 'Sneakers',
                routeName: 'sneakers',
                items: [
                    {
                        id: 1,
                        name: 'Adidas NMD',
                        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                        price: 220
                    },
                    {
                        id: 2,
                        name: 'Adidas Yeezy',
                        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                        price: 280
                    },
                    {
                        id: 3,
                        name: 'Black Converse',
                        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                        price: 110
                    },
                    {
                        id: 4,
                        name: 'Nike White AirForce',
                        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                        price: 160
                    },
                    {
                        id: 5,
                        name: 'Nike Red High Tops',
                        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                        price: 160
                    },
                    {
                        id: 6,
                        name: 'Nike Brown High Tops',
                        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                        price: 160
                    },
                    {
                        id: 7,
                        name: 'Air Jordan Limited',
                        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                        price: 190
                    },
                    {
                        id: 8,
                        name: 'Timberlands',
                        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                        price: 200
                    }
                ]
            },
            {
                id: 3,
                title: 'Jackets',
                routeName: 'jackets',
                items: [
                    {
                        id: 1,
                        name: 'Black Jean Shearling',
                        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                        price: 125
                    },
                    {
                        id: 2,
                        name: 'Blue Jean Jacket',
                        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                        price: 90
                    },
                    {
                        id: 3,
                        name: 'Grey Jean Jacket',
                        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                        price: 90
                    },
                    {
                        id: 4,
                        name: 'Brown Shearling',
                        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                        price: 165
                    },
                    {
                        id: 5,
                        name: 'Tan Trench',
                        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                        price: 185
                    }
                ]
            },
            {
                id: 4,
                title: 'Womens',
                routeName: 'womens',
                items: [
                    {
                        id: 1,
                        name: 'Blue Tanktop',
                        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                        price: 25
                    },
                    {
                        id: 2,
                        name: 'Floral Blouse',
                        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                        price: 20
                    },
                    {
                        id: 3,
                        name: 'Floral Dress',
                        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                        price: 80
                    },
                    {
                        id: 4,
                        name: 'Red Dots Dress',
                        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                        price: 80
                    },
                    {
                        id: 5,
                        name: 'Striped Sweater',
                        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                        price: 45
                    },
                    {
                        id: 6,
                        name: 'Yellow Track Suit',
                        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                        price: 135
                    },
                    {
                        id: 7,
                        name: 'White Blouse',
                        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                        price: 20
                    }
                ]
            },
            {
                id: 5,
                title: 'Mens',
                routeName: 'mens',
                items: [
                    {
                        id: 1,
                        name: 'Camo Down Vest',
                        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                        price: 325
                    },
                    {
                        id: 2,
                        name: 'Floral T-shirt',
                        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                        price: 20
                    },
                    {
                        id: 3,
                        name: 'Black & White Longsleeve',
                        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                        price: 25
                    },
                    {
                        id: 4,
                        name: 'Pink T-shirt',
                        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                        price: 25
                    },
                    {
                        id: 5,
                        name: 'Jean Long Sleeve',
                        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                        price: 40
                    },
                    {
                        id: 6,
                        name: 'Burgundy T-shirt',
                        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                        price: 25
                    }
                ]
            }
        ]
    }; // end of state
    */

    // now point collections to our SHOP_DATA array from shop.data.jsx
    /*
    state = {
        collections : SHOP_DATA
    };
    */

    // render() {
        // could do render() this way instead:
        /*
        return(

            <div className="shop-page">
            {
                this.state.collections( ( { id, ...otherCollectionProps } ) => (
                    <CollectionPreview
                        key   ={ id }
                        ...otherCollectionProps ( and ...otherCollectionProps represents
                        (1) title ={ title } and (2) routeName = { routename } and
                        (3) items ={ items } )
                    />
                ))
            }
            </div>

        );
        */
        // return (


    // -- Mark 2 --
    // lecture 132: Collection Overview Component
    // now we want to move collection.map or:
    /*
       collections.map( ( { id, title, items } ) => (
            <CollectionPreview
                key   ={ id }
                title ={ title }
                items ={ items }
            />
        ))
    */
    // into its own component and once we move it out we won't need the " collections " array
    // anymore and we will tie everything that is attached to our CollectionPreview component
    // and put it into a CollectionsOverview component and the CollectiosnOverview component will
    // be connected to the state and will get the collections array and let's make a new folder
    // inside our components folder called collections-overview and inside that file we will
    // create 2 new files: collections-overview.component.jsx and
    // collections.overview.styles.scss and let's go to collections-overview.component.jsx and
    // now I'm back from collections-overview.component.jsx and (1) let change collections.map
    // below or:
    /*
       collections.map( ( { id, title, items } ) => (
            <CollectionPreview
                key   ={ id }
                title ={ title }
                items ={ items }
            />
        ))
    */
    
    // to <CollectionsOverview /> and (2) let's comment out mapStateToProps and delete connect
    // below and (3) let's comment out the imports for the CollectionPreview component, connect,
    // createStructuredSelector and selectShopCollections above and (4) let's import in the
    // CollectionsOverview component and (5) change
    // " const ShopPage = ( { collections } )  => ( " to " const ShopPage = ()  => ( " and
    // now if I look at our app everything is still working as expected and in the next lecture
    // we will selectively render inside the CollectionsOverview component so we will have one
    // route that leads us to our CollectionsOverview component and this will apply only when
    // were on the shop page and then we will render our new category page when we land on our
    // shop/:category route
    // End of -- Mark 2 --


    // -- Mark 3 --
    // lecture 133: Nested Routing in Shop Page
    // instead of just rendering our component or <CollectionsOverview /> we need to access
    // the component through a route and the path we want to display is the current path or that
    // were on or " path={ `${ match.path }` } " and remember our shop page is also a routed
    // component in the App.js file so when were on "/shop" we should see our CollectionsOverview
    // component just like before

    // we know we have access to the match object inside the ShopPage component because our
    // shop page is nested inside a route in the App.js file and remember route automatically
    // passes 3 objects to our components as props and those 3 object are match, location
    // and history and for this component we want the match object and change
    // " const ShopPage = ()  => ( " to " const ShopPage = ( { match } )  => ( " above

    // we will use string interpolation to get the path for the CollectionsOverview component
    // or we will do " path={ `${ match.path }` } " and if we run console.log( match );
    // inside our ShopPage component  we will get the following result in the console:
    /*
        {path: "/shop", url: "/shop", isExact: true, params: {…}}
            path: "/shop"
            url: "/shop"
            isExact: true
            params: {}
            __proto__: Object
    */

    // in other words, " path : "/shop" " so " path={ `${ match.path }` } " below should
    // equal " path="/shop" " and we need to know the current path for the shop page
    // because we have to build our routes off the shop page path and before we finish our
    // routing, let's build our category page first so inside the pages folder add a new
    // folder called category and inside that folder let's add 2 new files: category.component.jsx
    // and category.styles.scss and let's go to category.component.jsx and now were back
    // from category.component.jsx and let's import in the CategoryPage component above

    // Yihua said he mentioned ealier that we need to nest our routes so what does that mean?
    // what we want is be able to dynamically pick the right category from our collections
    // array and display that particular category on the category page

    // so we are going to tell the category route that the route name will be a parameter
    // and we want to be able to access the string that is in our URL so that we can access
    // the right category

    // so for our category route we will do the following:
    /*
        <Route  
            path={ `${ match.path }/:category` }
            exact={ true }
            component={ CategroyPage }
        />
    */

    // and remember we want to use " `${ match.path }` " instead of hardcoding the path like
    // " path={ /shop } " since we want to be able to pick up the shop url no matter what
    // the shop url happens to be and then start from that point and move forward
    // and in this case we want to add the category parameter or " /:categoryId " and what
    // " categoryId " does is it allows us to access the categoryId as a parameter on the
    // match object and we can do this when were on the category page and now let's go back
    // to the category.component.jsx file

    <div className="shop-page">

        <Route  
            path={ `${ match.path }` }
            exact={ true }
            component={ CollectionsOverview }
        />
        <Route  
            path={ `${ match.path }/:collectionId` }
            component={ CollectionPage }
        />

    </div>

    // End of -- Mark 3 --

        // );

    // }

);

/*
const mapStateToProps = createStructuredSelector(

    {
        collections : selectShopCollections
    }

);
*/

export default ShopPage;