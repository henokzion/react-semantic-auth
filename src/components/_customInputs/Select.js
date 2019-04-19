import React from 'react';

import { Form } from 'semantic-ui-react';

export const Select = props => {
    var valid = props.meta.touched && (props.meta.error !== undefined);
    return (
        <Form.Field>
            <Form.Select selection {...props.input}
                value={props.input.value}
                onChange={(param, data) => props.input.onChange(data.value)}
                placeholder={props.placeholder}
                options={props.options}
                error={valid}
            />
        </Form.Field>
    )
}