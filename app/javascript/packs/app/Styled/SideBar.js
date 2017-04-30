import styled from 'styled-components'

const SideBar = styled.aside`
    background-color: ${props => props.theme.altBg}
    color: ${props => props.theme.main}
    padding: 0.5em 1em;
`;

export default SideBar