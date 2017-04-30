import React, {Component} from 'react'

class RightColumn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Github</li>
            </ul>
        )
    }
}

export default RightColumn