import React from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";
import Signup from "../Signup";
import Signin from "../Signin";

class ButtonAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' };
        this.logout = this.logout.bind(this);
    }
    logout() {
        this.props.logout()
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state

        return (
            <Container>
                <Menu secondary>
                    <Menu.Menu position='right'>
                        <Menu.Item name='Add Company' active={activeItem === 'Add Company'} onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Pricing'
                            active={activeItem === 'Pricing'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='About'
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                        {
                            this.props.isAuth?
                                <Menu.Item
                                    name='logout'
                                    active={activeItem === 'logout'}
                                    onClick={this.logout}
                                />:
                                [<Signup key="signup"/>,
                                <Signin key="signin"/>]

                        }
                        
                    </Menu.Menu>
                </Menu>
            </Container>

        );
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, actions)
)(ButtonAppBar);
