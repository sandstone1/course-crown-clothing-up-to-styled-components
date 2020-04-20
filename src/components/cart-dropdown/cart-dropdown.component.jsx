
import React from 'react';
import './cart-dropdown.styles.scss';

// import in our CustomButton component since we know we need one
import CustomButton from '../custom-button/custom-button.component';


// -- Mark 1 --
// lecture 113: Cart Item Component
// below we will get " state.cart.cartItems " by using connect and mapStateToProps
// and then we will use map to interate over " cartItems " and by doing this we will be
// able to pass " item " to the CartItem component and the CartItem component will use
// " item " and it's associated properties to build the CartItem component

// now open our CartDropdown component and now when we click on the " Add To Cart "
// custom button in our collection item component we see that that collection item 
// along with the image, name and price has been added to our cart dropdown window and
// if we click on " Add To Cart " on another collection item we will see that
// that collection item is now appended to our cart dropdown window and sits right underneth
// the first collection item so everything is working as expected and is super performant,
// really amazingly performant

// Yihua said hopefully by now we can see the benefit of what redux does for us and hopefully
// we understand this pattern

// now let's commit our code so let's do:

// Rogers-iMac:crown_clothing Home$ git status
// Rogers-iMac:crown_clothing Home$ git add .
// Rogers-iMac:crown_clothing Home$ git commit -m " created cart-item component and connected
// our cart dropdown component with our cart reducer "
// Rogers-iMac:crown_clothing Home$ git push origin master

// now if I go to my " crown-clothing " project in GutHub, I see the changes were uploaded
// sucessfully
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
// End of -- Mark 1 --

const CartDropdown = ( { cartItems } ) => (

    <div 
        className="cart-dropdown"
    >

        <div className="cart-dropdown--items">

            {
                cartItems.map( ( cartItem ) => (
                    <CartItem
                        key ={ cartItem.id }
                        item={ cartItem }
                    />
                ) )
            }

        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>

);


// -- Mark 1 -- continued
// lecture 113: Cart Item Component
const mapStateToProps = ( state ) => (
    {
        cartItems : state.cart.cartItems
    }
);

export default connect( mapStateToProps )( CartDropdown );
// End of -- Mark 1 --

// after I set up the styling, let's bring this component into our Header component