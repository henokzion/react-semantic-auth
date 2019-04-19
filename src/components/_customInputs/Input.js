import React from 'react';

import { Form } from 'semantic-ui-react';

export const Input = ({ input, value, placeholder, type, meta: { touched, error, warning } }) => {
    var valid = touched && (error !== undefined);
    return (
        <Form.Field>
            <Form.Input 
                {...input}
                value = {value} 
                placeholder={placeholder} 
                type={type} 
                error={valid} 
            />
        </Form.Field>
    )
}