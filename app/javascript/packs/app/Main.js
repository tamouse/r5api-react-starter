import React, {Component} from 'react'
import styled from 'styled-components'

const MainContent = styled.main`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.main};
    padding: 0.5em 2em;
`;

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MainContent>
                <h2>Main Content</h2>
                <p>This is where the main content will go.</p>
                <p>The plan is for this to be the primary routed content.</p>
                <p>
                    In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home, the only thing I have power over is the garbage. They say everything looks better with odd numbers of things. But sometimes I put even numbersâ€”just to upset the critics. The shadows are just like the highlights, but we're going in the opposite direction. Everyone is going to see things differently - and that's the way it should be. This is probably the greatest thing that's ever happened in my life. There we go.
                </p>
                <p>Remember how free clouds are. They just lay around in the sky all day long. I think there's an artist hidden in the bottom of every single one of us. If you don't think every day is a good day - try missing a few. You'll see. You don't have to be crazy to do this but it does help.</p>

                <p>Nature is so fantastic, enjoy it. Let it make you happy. We'll paint one happy little tree right here. Just let your mind wander and enjoy. This should make you happy. I can't think of anything more rewarding than being able to express yourself to others through painting.</p>

                <p>Steve wants reflections, so let's give him reflections. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Water's like me. It's laaazyÂ ... Boy, it always looks for the easiest way to do things Don't be afraid to make these big decisions. Once you start, they sort of just make themselves.</p>
            </MainContent>
        )
    }
}

export default Main