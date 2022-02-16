import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-signout.styles.scss'

const SigninSignout = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
    
);

export default SigninSignout;