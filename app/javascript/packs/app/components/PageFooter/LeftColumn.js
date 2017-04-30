import React, {Component} from 'react'

class LeftColumn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Careers</li>
            </ul>
        )
    }
}

export default LeftColumn