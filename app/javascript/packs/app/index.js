import React from 'react'
import {ThemeProvider} from 'styled-components'

const theme = {
    main: 'slategrey',
    background: 'mintcream',
    altBg: 'seashell'
};

import Grid from './grid/'
import TopNav from './components/TopNav'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import PageFooter from './components/PageFooter'
import Main from './Main'

export default () => (
    <ThemeProvider theme={theme}>
        <Grid>
            <TopNav/>
            <LeftSide/>
            <Main/>
            <RightSide/>
            <PageFooter/>
        </Grid>
    </ThemeProvider>
)
