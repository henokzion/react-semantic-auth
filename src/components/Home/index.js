import React from "react";
import { Input, Menu, Container } from 'semantic-ui-react'

import Header from "../Layout/Header";
export default()=>{
    return(
        <React.Fragment>
            <Header />
            <Container>
                <Menu secondary>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </React.Fragment>
    )
}