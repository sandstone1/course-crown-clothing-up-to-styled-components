
// Example 1:
const addTo80 = ( n ) => (
    n + 80
);

// let's run the function
addTo80( 5 );

// the return value in the console is " 85 "

// now let's run this function 2 more times
addTo80( 5 );
addTo80( 5 );

// but what if this operation took a really long time to run so the question becomes
// is there a way we can optimize this? and this is where caching or memoization can
// come to the rescue  

// Example 2:
let cache = {
    5 : 85
};

const memoizedAddTo80 = ( n ) => {

    // this says if " n " exist in " cache " or if we cached " n " before 
    if ( n in cache ) {
        // if " n " does exist in cache then just return " cache[ n ] "
        return cache[ n ];

    }
    // and remember the first time through the function n does not exist so let's
    // write an else statement
    else {
        cache[ n ] = n + 80; 
    }

};

// after running the following function we will cache the following key value pair
// inside the cache object above or " 5 : 85 "
memoizedAddTo80( 5 );

// so the next time around, we will go through the if statement and see that 5 is already
// in the cache and therefore this will run super fast and cache[ 5 ] is equal to 85
memoizedAddTo80( 5 );


// Example 3:
let cache = {

};

const memoizedAddTo80 = ( n ) => {

    // this says if " n " exist in " cache " or if we cached " n " before 
    if ( n in cache ) {
        // if " n " does exist in cache then just return " cache[ n ] "
        return cache[ n ];

    }
    // and remember the first time through the function n does not exist so let's
    // write an else statement
    else {
        console.log( 'long time' );
        cache[ n ] = n + 80;
        return cache[ n ];
    }

};

// now the first time we run this function we get: " long time " and " 85 "
memoizedAddTo80( 5 );

// so now we have:
let cache = {
    5 : 85
};

console.log( '1', memoizedAddTo80( 6 ) );
console.log( '2', memoizedAddTo80( 6 ) );

// now if we run the above console.log calls we get:
// " long time "
// 1 86
// 2 86

// so the first time memoizedAddTo80( 5 ) runs we log " long time " and calculate 85 but
// the second time memoizedAddTo80( 5 ) runs because " n " was already in the cache we didn't
// have to do this long calculation or " cache[ n ] = n + 80; " we just return it immediately
// or " return cache[ n ]; "

// so memoization is a specific form of caching that involves caching the return value of a
// function with a certain parameter or parameters and if the parameter or parameters don't
// change then Javascript will use the cache to come up with the return value and thereby save
// valuable time when running functions


