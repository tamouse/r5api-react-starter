import React, {Component} from 'react'
import SideBar from '../../Styled/SideBar'

class LeftSide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SideBar>
                <h2>Left Sidebar</h2>
                <ul className="bullets">
                    <li>list item 1</li>
                    <li>list item 2</li>
                    <li>list item 3</li>
                </ul>
            </SideBar>
        )
    }
}

export default LeftSide
