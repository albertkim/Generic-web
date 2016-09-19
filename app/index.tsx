/// <reference path="../typings/index.d.ts"/>
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise'
import {reducers} from './reducers'
import {Home} from './containers/Home'
import NavigationBar from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import {About} from './containers/About'
import {Login} from './containers/Login'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'

// General Typescript+Redux:
// https://rjzaworski.com/2016/08/typescript-redux-and-react
// Reference for creating redux-connected components without having to pass down props: 
// http://www.mattgreer.org/articles/typescript-react-and-redux/
class App extends React.Component<void, void> {

  render() {
    return (
      <div>
        <NavigationBar />
        <div style={{height: '3em'}}/>
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }

}

ReactDOM.render((
  // Reference for middleware is not a function error
  // https://github.com/gaearon/redux-thunk/issues/35
  <Provider store={createStore(reducers, applyMiddleware(promiseMiddleware))}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app')
)
