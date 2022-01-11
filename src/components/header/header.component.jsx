import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                {
                    currentUser
                    ? (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
                    : (<Link className='option' to='/signin'>Sign in</Link>)
                }

                <CartIcon></CartIcon>  
                  
            </div>
            {
            hidden 
            ? null 
            : <CartDropdown></CartDropdown> 
            
            }
        </div>
    );
};

const mapStateToProps = ({ user:{currentUser}, cart:{hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);