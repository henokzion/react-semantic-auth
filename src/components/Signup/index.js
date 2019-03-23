import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Modal, Segment , Menu} from 'semantic-ui-react';

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
        await this.props.signup(formData);
        if (!this.props.errorMessage) {
            this.props.history.push("/");
            this.setState({open: false})
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
                <Menu.Item size="mini" onClick={this.show()}>Sign Up</Menu.Item >

                <Modal size="mini" open={this.state.open} onClose={this.close}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={handleSubmit(this.onsubmit)} size='large'>
                            <Segment stacked>
                                <Field
                                    component={Form.Input}
                                    name="email"
                                    fluid
                                    icon='user'
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

                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Modal.Content>
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
    reduxForm({ form: "SignUp" })
)(SignUp);