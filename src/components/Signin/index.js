import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


import * as actions from "../../actions"

export const renderInput = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
        <input
            {...input}
            {...custom}
        />
    )


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

        this.onsubmit = this.onsubmit.bind(this);
    }


    async onsubmit(formData) {
        await this.props.login(formData);
        if (!this.props.errorMessage) {
            this.props.history.push("/");
            this.setState({ open: false })
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className='login-form' style={{ height: '100%' }}>

                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={handleSubmit(this.onsubmit)}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "SignUp" }),
    withRouter
)(SignUp);