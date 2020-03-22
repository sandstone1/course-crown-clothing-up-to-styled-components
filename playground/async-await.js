
// we'll when we think back on our last lesson with promises and fetch we know that with our
// fetch call we know that if we were to write it with the style of promises we would do the
// following ( see the below code )
fetch( 'https://jsonplaceholder.typicode.com/users' )
.then( ( response ) => response.json() )
.then( ( users ) => {
    const firstUser = users[ 0 ];
    console.log( firstUser );
    return fetch(
       'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
} )   
.then( ( response ) => response.json() )
.then( ( posts ) => console.log( posts ) );



// and leture 25 explains this fetch and promises pretty well so a portion of lecture 25 below:

// from lecture 25: Fetching Content
/*
componentDidMount() {
    // what we want to do inside componentDidMoount is use JavaScript's native fetch() to make
    // a request from the URL and what fetch returns is a promise and then we can do something
    // with that promise and the promise will give us a response argument and when we log out
    // the response ( i.e. console.log( response ) ) we get back the following:
    /*
    Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
    body: ReadableStream
    bodyUsed: false
    headers: Headers {}
    ok: true
    redirected: false
    status: 200
    statusText: "OK"
    type: "cors"
    url: "https://jsonplaceholder.typicode.com/users"
        __proto__: Response
    */

    // and what we want is located inside the body property but we need it in a format that
    // JavaScript can understand and response.json() will parse the response as JSON
    // or convert the response into the format JSON and by returning
    // response.json() we create a new promise and we can then use this new promise and this
    // new promise will contain data that JavaScript can understand or this new promise will
    // contain the body of our users array and let's console.log out " users " so we can see
    // what were getting ( i.e. console.log( users ) ) and we get back the following:
    /*
    (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz",
    1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv",
    2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net",
    3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org",
    4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca",
    5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info",
    6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz",
    7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me",
    8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io",
    9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz",
        length: 10
        __proto__: Array(0)
    */

    // so we can use this array and now we want to call setState inside this promise or inside
    // our then() call and we want to set our monsters equal to this array of users so now we
    // want our monsters property inside the initial state to be equal to an empty array since
    // we no longer need to hardcode the array so now were going to wait for our component to
    // mount and then were going to fetch all of our users and then update our state monster's
    // property with this new array of users and if we go check our application or website
    // we see that we now have all 10 monsters or users listed on the page as follows:

    /*
    Leanne Graham
    Ervin Howell
    Clementine belly
    Patricia Lebsack
    Chelsey Dietrich
    Mrs. Dennis Schulist
    Kurtis Weissnat
    Nicholas Runolfsdottir V
    Glenna Reichert
    Clementina DuBuque
    */

    /*
    // in the next section, we are going to convert our list of users on our website to look
    // a little bit more like our finished monsters website
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( ( response ) => response.json() )
    .then( (    users ) => this.setState( { monsters : users } ) );
}
*/

// END OF LECTURE 25


// continued from above ( before notes on lecture 25 )
// and with our first example above there are a lot of things happening and if we paste
// that code into our browser console and hit return we see that we get back the following

/*

fetch( 'https://jsonplaceholder.typicode.com/users' )
.then( ( response ) => response.json() )
.then( ( users ) => {
    const firstUser = users[ 0 ];
    console.log( firstUser );
    return fetch(
       'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
} )   
.then( ( response ) => response.json() )
.then( ( posts ) => console.log( posts ) );

Promise {<pending>}

**[ GET BACK INFORMATION ON USER 1 - RH COMMENTS ]**

{id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
id: 1
name: "Leanne Graham"
username: "Bret"
email: "Sincere@april.biz"
address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
phone: "1-770-736-8031 x56442"
website: "hildegard.org"
company:
name: "Romaguera-Crona"
catchPhrase: "Multi-layered client-server neural-net"
bs: "harness real-time e-markets"
__proto__: Object
__proto__: Object

**[ GET BACK POST FOR USER 1 - RH COMMENTS ]**

(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio
reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est
autem sunt rem eveniet architecto"}
1: {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil
reprehend…aperiam non debitis possimus qui neque nisi nulla"}
2: {userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore
et velit aut"}
3: {userId: 1, id: 4, title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem
adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"}
4: {userId: 1, id: 5, title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt
sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"}
5: {userId: 1, id: 6, title: "dolorem eum magni eos aperiam quia", body: "ut aspernatur
corporis harum nihil quis provident …s↵voluptate dolores velit et doloremque molestiae"}
6: {userId: 1, id: 7, title: "magnam facilis autem", body: "dolore placeat quibusdam ea
quo vitae↵magni quis e…t excepturi ut quia↵sunt ut sequi eos ea sed quas"}
7: {userId: 1, id: 8, title: "dolorem dolore est ipsam", body: "dignissimos aperiam
dolorem qui eum↵facilis quibus…↵ipsam ut commodi dolor voluptatum modi aut vitae"}
8: {userId: 1, id: 9, title: "nesciunt iure omnis dolorem tempora et accusantium", body:
"consectetur animi nesciunt iure dolore↵enim quia a…st aut quod aut provident voluptas
autem voluptas"}
9: {userId: 1, id: 10, title: "optio molestias id quia eum", body: "quo et expedita modi
cum officia vel magni↵dolorib…it↵quos veniam quod sed accusamus veritatis error"}
length: 10
__proto__: Array(0)

*/

// if we wanted to do this same thing in async await, the way we would is we cast a function like
// below and we make it an async function by writing the async keyword and then add the arrow
// function after the async keyword and now we can use the await keyword and what await does is
// await pauses the function's execution until what we are waiting for is completed and comes
// back with a value so what do we mean by this? we'll if we wrote await and then fetched this
// value fetch( 'https://jsonplaceholder.typicode.com/users' ) or
// await fetch( 'https://jsonplaceholder.typicode.com/users' ) then any code after this will
// not run until fetch comes back with a value and we can set that return value equal to a
// const and in our case we will call the const " usersResponse ", as an example
const myAsyncFunction = async () => {
    const usersResponse = await fetch( 'https://jsonplaceholder.typicode.com/users'
    );
    // usersResponse above is equal to the the first response object above in our promises example
    // or the first reponse object in the following  " .then( ( response ) => response.json() ) "
    // and below we wait for our usersResponse object to be converted to json and then save
    // that return value in the const called " users "

    // from Jonas Schmedtmann's JavaScript class: "convert json data to JavaScript by using the json
    // method and await the result and this will return a promise and once the promise is
    // resolved or done it will assign the result of the promise to the const resultData and
    // resultData will be a JavaScript object"
    const users = await usersResponse.json();
    // select the second user
    const secondUser = users[ 1 ];
    // and then let's console log out the second user's information
    console.log( secondUser );

    // now let's get the postsRespose for the second user and we will wait until fetch
    // retrieves a value and then save that return value to the const " postsResponse "
    const postsResponse = await fetch( 
        'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
    );
    // and then convert the postsResponse json data to JavaScript by using the json
    // method and await the result and this will return a promise and once the promise is
    // resolved or done it will assign the result of the promise to the const called
    // " posts " and posts will be a JavaScript object
    const posts = await postsResponse.json();
    // and then let's console log out the second user's posts
    console.log( posts );
}

// and the code above reads more like synchronous code and the code is easier to read
// and if we copy the above code into our console and then call the function
// " myAsyncFunction " we will see:

/*

const myAsyncFunction = async () => {
    const usersResponse = await fetch( 'https://jsonplaceholder.typicode.com/users'
    );
    // usersResponse above is equal to the the first response object above in our promises example
    // or the first reponse object in the following  " .then( ( response ) => response.json() ) "
    // and below we wait for our usersResponse object to be converted to json and then save
    // that return value in the const called " users "

    // from Jonas Schmedtmann's JavaScript class: "convert json data to JavaScript by using the json
    // method and await the result and this will return a promise and once the promise is
    // resolved or done it will assign the result of the promise to the const resultData and
    // resultData will be a JavaScript object"
    const users = await usersResponse.json();
    // select the second user
    const secondUser = users[ 1 ];
    // and then let's console log out the second user's information
    console.log( secondUser );

    // now let's get the postsRespose for the second user and we will wait until fetch
    // retrieves a value and then save that return value to the const " postsResponse "
    const postsResponse = await fetch( 
        'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
    );
    // and then convert the postsResponse json data to JavaScript by using the json
    // method and await the result and this will return a promise and once the promise is
    // resolved or done it will assign the result of the promise to the const called
    // " posts " and posts will be a JavaScript object
    const posts = await postsResponse.json();
    // and then let's console log out the second user's posts
    console.log( posts );
}

myAsyncFunction();

Promise {<pending>}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: undefined

{id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
id: 2
name: "Ervin Howell"
username: "Antonette"
email: "Shanna@melissa.tv"
address: {street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh", zipcode: "90566-7771", geo: {…}}
phone: "010-692-6593 x09125"
website: "anastasia.net"
company: {name: "Deckow-Crist", catchPhrase: "Proactive didactic contingency", bs: "synergize scalable supply-chains"}
__proto__: Object

(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {userId: 2, id: 11, title: "et ea vero quia laudantium autem", body: "delectus reiciendis molestiae occaecati non minima…luptates ut commodi qui incidunt↵ut animi commodi"}
1: {userId: 2, id: 12, title: "in quibusdam tempore odit est dolorem", body: "itaque id aut magnam↵praesentium quia et ea odit e…uia id voluptatem↵incidunt ea est distinctio odio"}
2: {userId: 2, id: 13, title: "dolorum ut in voluptas mollitia et saepe quo animi", body: "aut dicta possimus sint mollitia voluptas commodi …ssumenda consectetur porro architecto ipsum ipsam"}
3: {userId: 2, id: 14, title: "voluptatem eligendi optio", body: "fuga et accusamus dolorum perferendis illo volupta…molestiae beatae↵sed aut voluptas totam sit illum"}
4: {userId: 2, id: 15, title: "eveniet quod temporibus", body: "reprehenderit quos placeat↵velit minima officia do…usandae quis delectus↵officiis harum fugiat vitae"}
5: {userId: 2, id: 16, title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio", body: "suscipit nam nisi quo aperiam aut↵asperiores eos f… magni mollitia accusamus ea nisi voluptate dicta"}
6: {userId: 2, id: 17, title: "fugit voluptas sed molestias voluptatem provident", body: "eos voluptas et aut odit natus earum↵aspernatur fu…ui eos↵qui nihil ratione nemo velit ut aut id quo"}
7: {userId: 2, id: 18, title: "voluptate et itaque vero tempora molestiae", body: "eveniet quo quis↵laborum totam consequatur non dol… repudiandae↵est voluptatem vel debitis et magnam"}
8: {userId: 2, id: 19, title: "adipisci placeat illum aut reiciendis qui", body: "illum quis cupiditate provident sit magnam↵ea sed …tque↵adipisci quo iste expedita sit quos voluptas"}
9: {userId: 2, id: 20, title: "doloribus ad provident suscipit at", body: "qui consequuntur ducimus possimus quisquam amet si…erum consequatur expedita quidem cumque explicabo"}
length: 10
__proto__: Array(0)

*/

// remember both promise chaining and async await are valid and now let's talk about
// error handling with async await and we know we can handle our errors when using
// promises by doing the following:
fetch( 'https://jsonplaceholder.typicode.com/users' )
.then( ( response ) => response.json() )
.then( ( users ) => {
    const firstUser = users[ 0 ];
    console.log( firstUser );
    return fetch(
       'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
} )   
.then( ( response ) => response.json() )
.then( ( posts ) => console.log( posts ) )
// the catch below will catch an error that occurs anywhere in the function
.catch( ( error ) => console.log( error ) );

// with async await we have to use a JavaScript try catch block and the try catch
// block looks like this:
/*
try {

} catch ( error ) {

}
*/

// so let's do the following:
const myAsyncFunction = async () => {

    try {
        const usersResponse = await fetch( 'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();
        const secondUser = users[ 1 ];
        console.log( secondUser );
    
        const postsResponse = await fetch( 
            'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
        );
        const posts = await postsResponse.json();
        console.log( posts );
    } catch ( error ) {
        // if any error occurs in the try block ( such as one of our promises that reject or one
        // of our fetch calls that fail ) then the catch block will run and the error will be
        // passed to the catch block and to see that an error occured we could console log out
        // " there was an error "
        console.log( 'there was an error' );
    }

};
// if we copy the above code to the console and misspell the first fetch call then we will
// see our error message in the console

/*

const myAsyncFunction = async () => {

    try {
        const usersResponse = await fetch( 'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();
        const secondUser = users[ 1 ];
        console.log( secondUser );
    
        const postsResponse = await fetch( 
            'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
        );
        const posts = await postsResponse.json();
        console.log( posts );
    } catch ( error ) {
        // if any error occurs in the try block ( such as one of our promises that reject or one
        // of our fetch calls that fail ) then the catch block will run and the error will be
        // passed to the catch block and to see that an error occured we could console log out
        // " there was an error "
        console.log( 'there was an error' );
    }

};

myAsyncFunction();

Promise {<pending>}
GET https://jsolaceholder.typicode.com/users net::ERR_NAME_NOT_RESOLVED [ MY MISSPELLING ]
there was an error

*/

// so this is how async await works and we now know the 2 ways of handling asynchronous
// events