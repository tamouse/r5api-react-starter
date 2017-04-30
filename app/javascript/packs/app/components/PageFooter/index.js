import React, {Component} from 'react'
import styled from 'styled-components'

import LeftColumn from './LeftColumn'
import CenterColumn from './CenterColumn'
import RightColumn from './RightColumn'

const Footer = styled.footer`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.background};
    grid-column: 1 / 4;
    display: flex;
    justify-content: space-around;
    align-items: top;
    padding: 2em 0;
`;

class PageFooter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Footer>
                <LeftColumn/>
                <CenterColumn/>
                <RightColumn/>
            </Footer>
        )
    }
}

export default PageFooter