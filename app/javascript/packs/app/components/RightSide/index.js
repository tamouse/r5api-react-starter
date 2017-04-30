import React, {Component} from 'react'
import SideBar from '../../Styled/SideBar'

class RightSide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SideBar>
                <h2>Right Sidebar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illo, maiores. Aut ipsum qui sint vel veniam. Animi autem blanditiis enim ipsum labore laborum, officia, placeat qui totam vero voluptatem.</p>
            </SideBar>
        )
    }
}

export default RightSide