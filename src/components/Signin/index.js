import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { Button, Form, Modal, Segment, Menu, Icon } from 'semantic-ui-react';

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
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    show = () => () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    async onsubmit(formData) {
        await this.props.login(formData);
        if (!this.props.errorMessage) {
            this.props.history.push("/");
            this.setState({ open: false })
        }
    }

    async responseGoogle(response) {
        console.log(response.accessToken);
        await this.props.loginWithGoogle({
            access_token: response.accessToken
        });
        if (!this.props.errorMessage) {
            this.props.history.push("/");
        }
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <React.Fragment>
                <Menu.Item size="mini" onClick={this.show()}>Sign In</Menu.Item >

                <Modal size="mini" open={this.state.open} onClose={this.close}>
                    <Segment>

                    <Button color='linkedin' fluid size='small'>
                        <Icon name='linkedin' /> Continue with LinkedIn
                    </Button>
                    <br />
                    <Form onSubmit={handleSubmit(this.onsubmit)} size='large'>
                        
                            <Field
                                component={Form.Input}
                                name="email"
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Field
                                name="password"
                                component={Form.Input}
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <p>
                                <small as='h6'>Forget your </small>
                                <a href="/">password</a>
                            </p>

                            <Button content='Login' primary />
                       
                    </Form> </Segment>
                </Modal>
            </React.Fragment>
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