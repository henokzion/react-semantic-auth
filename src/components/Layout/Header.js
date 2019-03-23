import React from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";

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
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'messages'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.logout}
                        />
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
