import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => {
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
                    ? (<OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>)
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

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);