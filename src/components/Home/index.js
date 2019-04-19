import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react';
import Header from "../Layout/Header";

export default class MenuExampleTabularOnLeft extends Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <React.Fragment>
                <Header></Header>
                <Grid style={{height: '100%'}}>
                    <Grid.Column width={3} style={{height: '100%', paddingBottom: 0}}>
                        <Menu fluid vertical pointing style={{height: '100%'}}>
                            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
                            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
                            <Menu.Item
                                name='companies'
                                active={activeItem === 'companies'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='links'
                                active={activeItem === 'links'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={13}  style={{height: '100%'}}>
                        
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}