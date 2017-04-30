import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-template-rows: repeat(3, auto);
justify-items: stretch;
align-items: stretch;
`

export default Grid
