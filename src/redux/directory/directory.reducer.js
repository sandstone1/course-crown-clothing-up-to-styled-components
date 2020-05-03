
// first, set up our initial state and our initial state will contain our sections array
// and we might be wondering is there really a reason for us to move this outside of our
// directory class component if we not going to update that component or if we don't have
// another component that needs this data and there is a lot of debate on this topic and
// and some people say this is overkill to move this data out of the component and there
// is a benefit to doing this but we will not explore this benefit until later in the course
// when we get to testing

// the reason why we haven't talked about testing yet is that even though testing is really
// important in web development it is really important to grasp the fundalmentals first or
// before we start writing our tests since testing really makes sense once we grasp the
// fundalmentals of react so moving state our of the component and into its own reducer
// makes testing much easier

// another advantage of moving the sections array out of the Directory component is that
// it makes our Directory component more reusable


// -- Mark 1 --
// lecture 137: Data Normalization + Collection Page
// need to change our linkUrl from " linkUrl  : 'hats' " to " linkUrl  : 'shop/hats' " and
// make that change for all 5 sections and now if we go back to our application we see
// we now go to the right collection page after that clicking on a category in the Directory
// component and remember the Directory component is located on the home page

// now let's take this momnent and think about something I mentioned ealier and that is there
// are 2 ways that we can store the shop data inside our reducer and we currently have it as
// an array:
/*
shop:
    collections: Array(5)
        0: {id: 1, title: "Hats", routeName: "hats", items: Array(9)}
        1: {id: 2, title: "Sneakers", routeName: "sneakers", items: Array(8)}
        2: {id: 3, title: "Jackets", routeName: "jackets", items: Array(5)}
        3: {id: 4, title: "Womens", routeName: "womens", items: Array(7)}
        4: {id: 5, title: "Mens", routeName: "mens", items: Array(6)}
        length: 5
        __proto__: Array(0)
    __proto__: Object
*/

// and the issue here in our shop.selectors.js file we are calling find and this could
// slow our app down if we had thousands of collection items since find will go through every
// item in he array until it finds a match and this is the flaw with storing items in an array
// where we need to query each item in the array to get some kind of result

// instead we can store our data in an object and if we stored it in an object it would be
// similar to our COLLECTION_ID_MAP object and we would still pass in " collectionUrlParam "
// but instead of getting the id we would get the collection object itself and this concept
// of storing lists of elements inside an object instead of an array is called data
// normalization and it's quite simple so let's go to our shop.data.js file
// End of -- Mark 1 --


const INTIAL_STATE = {

    sections : [
        {
            title    : 'hats',
            imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
            id       : 1,
            linkUrl  : 'shop/hats'
        },
        {
            title    : 'jackets',
            imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
            id       : 2,
            linkUrl  : 'shop/jackets'                
        },
        {
            title    : 'sneakers',
            imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id       : 3,
            linkUrl  : 'shop/sneakers'
        },
        {
            title    : 'womens',
            imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
            size     : 'large',
            id       : 4,
            linkUrl  : 'shop/womens'
        },
        {
            title    : 'mens',
            imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
            size     : 'large',
            id       : 5,
            linkUrl  : 'shop/mens'
        }
    ]

};

// in this case, we will only use the default below and now go to root-reducer.js
const directoryReducer = ( state = INTIAL_STATE, action ) => {

    switch( action.type ) {

        default:

            return state;

    }

}

export default directoryReducer;
