import React from 'react';
import {Form} from 'shards-react';
import {FormGroup} from 'shards-react';
import {FormInput} from 'shards-react';

export default function SignUp() {
    return (
        <Form>
            <FormGroup>
                <label htmlFor="#firstname">First Name</label>
                <FormInput id="firstname" placeholder="First name"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="#lastname">Last Name</label>
                <FormInput id="lastname" placeholder="Last name"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="#firstname">First Name</label>
                <FormInput id="firstname" placeholder="First name"/>
            </FormGroup>
        </Form>
    )
}
