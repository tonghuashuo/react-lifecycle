import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route} from 'react-router-dom'
import './index.scss'
import App from './App'
import { unregister } from './serviceWorker'

render(
  <Router basename={''}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister()
