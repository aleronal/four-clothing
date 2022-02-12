import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { useSelector, useDispatch } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user.actions';

const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(signOutStart());

    }

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    Shop
                </OptionLink>
                <OptionLink to='/contact'>
                    Contact
                </OptionLink>
                {
                    currentUser
                    ? (<OptionDiv onClick={() => handleLogOut()}>Sign Out</OptionDiv>)
                    : (<OptionLink to='/signin'>Sign in</OptionLink>)
                }

                <CartIcon></CartIcon>  
                  
            </OptionsContainer> 
            {
            hidden 
            ? null 
            : <CartDropdown></CartDropdown> 
            
            }
        </HeaderContainer>
    );
};

// converted components to useSelector and useDispatch from react-redux instead of the connect way of doing it. its commented to remember how to do it: 
// const mapStateToProps = createStructuredSelector ({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden
// });

// const mapDispatchToProps = dispatch => ({
//     signOutStart: () => dispatch(signOutStart())
// });

export default Header;