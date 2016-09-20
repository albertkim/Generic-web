/// <reference path="../typings/index.d.ts"/>
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import promiseMiddleware from 'redux-promise'
import {reducers} from './reducers'
import {fetchCurrentUser} from './actions'
import {Home} from './containers/Home'
import NavigationBar from './containers/NavigationBar'
import IsEmailVerifiedBanner from './IsEmailVerifiedBanner'
import {Footer} from './containers/Footer'
import {About} from './containers/About'
import {Login} from './containers/Login'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'

// General Typescript+Redux:
// https://rjzaworski.com/2016/08/typescript-redux-and-react
// Reference for creating redux-connected components without having to pass down props: 
// http://www.mattgreer.org/articles/typescript-react-and-redux/

function mapStateToProps(state: any) : any {
  return state
}

class AppComponent extends React.Component<any, any> {

  componentWillMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <IsEmailVerifiedBanner />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }

}

const App = connect(mapStateToProps, {fetchCurrentUser})(AppComponent)

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
