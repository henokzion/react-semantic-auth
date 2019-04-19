import React from 'react';

import { Form, Select } from 'semantic-ui-react';

export const SearchSelect = props => {
    var valid = props.meta.touched && (props.meta.error !== undefined);
    return(
    <Form.Field>
        <Select {...props.input}
            selection
            value={props.input.value}
            onChange={(param, data) => props.input.onChange(data.value)}
            options={props.options}
            error={valid}
            placeholder={props.placeholder}
        />
    </Form.Field>
)}