import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
require('bootstrap-loader')
require('!style!css!sass!./styles/main.scss')

import { NavigationBar } from './containers/NavigationBar'
import { Footer } from './containers/Footer'
import { Home } from './containers/Home'
import { Register } from './containers/register'
import { Login } from './containers/login'
import { About } from './containers/about'
import { Contact } from './containers/contact'
import { Profile } from './containers/profile'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

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
