import React from 'react'
import {render} from 'react-dom'
import Main from './app/'
const App = () => (<div><Main /></div>)
document.addEventListener('DOMContentLoaded', () => (render(<App/>, document.body.appendChild(document.createElement('div')))))
