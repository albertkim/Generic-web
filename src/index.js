import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import 'bootstrap-loader'

import { NavigationBar } from './containers/NavigationBar'
import { Home } from './containers/home'
import { Register } from './containers/register'
import { Login } from './containers/login'
import { About } from './containers/about'
import { Contact } from './containers/contact'
import { Profile } from './containers/profile'

const App = React.createClass({
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
      <Route path="login" component={ Login } />
      <Route path="register" component={ Register } />
      <Route path="profile" component={ Profile } />
    </Route>
  </Router>
  ), document.getElementById('app')
)
