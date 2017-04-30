import React, {Component} from 'react'

class CenterColumn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li>Products</li>
                <li>Services</li>
                <li>Support</li>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Developer Central</li>
            </ul>
        )
    }
}

export default CenterColumn

