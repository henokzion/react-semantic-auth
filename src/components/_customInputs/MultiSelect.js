import React from 'react';

import { Form, Dropdown } from 'semantic-ui-react';

export const MultSelect = props => {
    var valid = props.meta.touched && (props.meta.error !== undefined);
    return (
        <Form.Field>
            <Dropdown
                {...props.input}
                value={props.input.value}
                onChange={(param, data) => props.input.onChange(data.value)}
                placeholder={props.placeholder}
                options={props.options}
                error={valid}
                fluid multiple selection
            />
        </Form.Field>
    )
}