import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KLTePKqnDanLj4DDO3mNAQuCGJVOHdpQ90n2pSSePnYS9XxVQSsSiZBruoXt6om90AGwQ6nsQeQYCFqeM4w1Ud000iSO8cMEA";
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment succesful')
        }).catch(err => {
            console.log('Payment Error: ', JSON.parse(err));
            alert('There was an issue with your payment, plase use the provided credit card');
        });
    };

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Four Clothing.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}>
            
        </StripeCheckout>
    );

};

export default StripeCheckoutButton;