import React, {Component} from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.background};
    grid-column: 1 / 4;
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
`;

const NavSet = styled.ul`
    margin-left: 2em;
    list-style: none;
`;

const NavItem = styled.li`
    margin-right: 2em;
`;


class TopNav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header>
                <NavBar>
                    <NavSet>
                        <NavItem>
                            <h1>Brand</h1>
                        </NavItem>
                    </NavSet>
                    <NavSet>
                        <NavItem>About</NavItem>
                    </NavSet>
                </NavBar>
            </Header>
        )
    }
}

export default TopNav