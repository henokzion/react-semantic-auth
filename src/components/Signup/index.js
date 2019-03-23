import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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
        this.state = {};

        this.onsubmit = this.onsubmit.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async onsubmit(formData) {
        await this.props.signup(formData);
        if(!this.props.errorMessage){
            this.props.history.push("/");
        }
    }

    async responseGoogle (response){
        console.log(response.accessToken);
        await this.props.loginWithGoogle({
            access_token : response.accessToken
        });
        if(!this.props.errorMessage){
            this.props.history.push("/");
        }
    }


    render() {
        const { classes, handleSubmit } = this.props;
        return (

            <div className='login-form'>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}
            </style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form onSubmit={handleSubmit(this.onsubmit)} size='large'>
                  <Segment stacked>
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
        
                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href='#'>Sign Up</a>
                </Message>
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
    reduxForm({ form: "SignUp" })
)(SignUp);