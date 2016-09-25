import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import * as promiseMiddleware from 'redux-promise'
import {reducers} from './reducers'
import App from './App'
import {Home} from './containers/Home'
import {About} from './containers/About'
import Login from './containers/Login'
import Profile from './containers/Profile'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'
import 'core-js'

// General Typescript+Redux:
// https://rjzaworski.com/2016/08/typescript-redux-and-react
// Reference for creating redux-connected components without having to pass down props:
// http://www.mattgreer.org/articles/typescript-react-and-redux/

declare var window: any

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk, promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render((
  // Reference for middleware is not a function error
  // https://github.com/reactjs/redux/issues/533
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app')
)
