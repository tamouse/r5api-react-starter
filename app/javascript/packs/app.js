// This will be the shell of our React application

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const App = (props) => (<div>React App will go here</div>)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App/>,
    document.body.appendChild(document.createElement('div'))
  )
})
