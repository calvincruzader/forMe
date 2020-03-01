import React from 'react';
import {useState} from 'react';
import {Form} from 'shards-react';
import {FormGroup} from 'shards-react';
import {FormInput} from 'shards-react';
import {FormCheckbox} from 'shards-react';
import {Button} from 'shards-react';

import GoogleButton from 'react-google-button';
import FacebookLogin from 'react-facebook-login';

import '../FormContainer.css';
import './SignUpForm.css';

import LineWithText from '../../LineWithText';


export default function SignUpForm() {
    const [termsAgreement, setTermsAgreement] = useState(false);
    const toggleTermsAgreement =()=> setTermsAgreement(!termsAgreement);

    return (
        <Form className="FormContainer">
            <div>
                <h1>Sign Up</h1>
            </div>
            <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
                />

<div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
            <div>
                
                <LineWithText text="or continue with email"/>
                <div className="flex-container">
                    <FormGroup className="formGroup">
                        <label htmlFor="#firstname">First Name</label>
                        <FormInput id="firstname" placeholder=""/>
                    </FormGroup>
                    <FormGroup className="formGroup">
                        <label htmlFor="#lastname">Last Name</label>
                        <FormInput id="lastname" placeholder=""/>
                    </FormGroup>
                </div>
                
                <FormGroup className="formGroup">
                    <label htmlFor="#username">Username</label>
                    <FormInput id="username" placeholder=""/>
                </FormGroup>

                <FormGroup className="formGroup">
                    <label htmlFor="#email">Email</label>
                    <FormInput id="email" placeholder=""/>
                </FormGroup>

                <FormGroup className="formGroup">
                    <label htmlFor="#phone">Phone Number</label>
                    <FormInput id="phone" placeholder=""/>
                </FormGroup>

                <FormGroup className="formGroup">
                    <label htmlFor="#password">Password</label>
                    <FormInput id="password" placeholder=""/>
                </FormGroup>

                <FormCheckbox className="formGroup" checked={termsAgreement} onChange={toggleTermsAgreement}>
                    I have read and agree to the terms and conditions
                </FormCheckbox>

                <Button className="auth-btn" theme="success">
                    Sign Up
                </Button>
            </div>
            
        </Form>
    )
}
