import React from 'react';
import './sign-in.styles.scss';

import {connect} from 'react-redux';

import {googleSignInStart, emailSignInStart, emailSignInFailure} from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {emailSignInStart} = this.props;
        const { email, password } = this.state;  
        
        emailSignInStart(email, password);
    };

    handleChange = event => {
        
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render(){

        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sing in with yor email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="email"/>
                    
                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>
                   
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart( {email,password} ))
});


export default connect(null,mapDispatchToProps)(SignIn);