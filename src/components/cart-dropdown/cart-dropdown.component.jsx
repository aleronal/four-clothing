import React from 'react';
import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                : (<span className='empty-message'>Your Cart is Empty</span>)
            }

            
        <CustomButton onClick={() => { 
            navigate('/checkout');
            dispatch(toggleCartHidden());
            
             }}>Go to Checkout</CustomButton>          
           
                  
            
        </div>
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})



export default connect(mapStateToProps)(CartDropdown);
