/// <reference path="../typings/index.d.ts"/>
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {Home} from './containers/Home'
import {NavigationBar} from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import {About} from './containers/About'
import {Login} from './containers/Login'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'

class App extends React.Component<any, any> {

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
  ), document.getElementById('app')
)
