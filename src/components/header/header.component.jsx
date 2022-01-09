import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
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
                    ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    : <Link className='option' to='/signin'>Sign in</Link>
                }

               
               
            </div>
        </div>
    );
};

export default Header;