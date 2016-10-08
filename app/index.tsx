import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'
import {App} from './App'
import {Home} from './containers/Home'
import {About} from './containers/About'
import {Login} from './containers/Login'
import ProfileContainer from './containers/Profile'
import Profile from './containers/Profile/Profile'
import {PreDashboard} from './containers/PreDashboard'
import CompanyRoot from './containers/CompanyRoot'
import CreateCompany from './containers/CreateCompany'
import Dashboard from './containers/Dashboard'
import DashboardWelcome from './containers/Dashboard/DashboardWelcome'
import DashboardCompany from './containers/Dashboard/DashboardCompany'
import DashboardContact from './containers/Dashboard/DashboardContact'
import DashboardSubscription from './containers/Dashboard/DashboardSubscription'
import 'bootstrap-loader'
import '!style!css!sass!./styles/main.scss'
import 'core-js'
import {CurrentUserStore} from './stores/currentUserStore'
import {ServerStore} from './stores/ServerStore'
import {UserCompaniesStore} from './stores/UserCompaniesStore'

// General Typescript+Redux:
// https://rjzaworski.com/2016/08/typescript-redux-and-react
// Reference for creating redux-connected components without having to pass down props:
// http://www.mattgreer.org/articles/typescript-react-and-redux/

declare const window: any

const currentUserStore = new CurrentUserStore()
const serverStore = new ServerStore()
const userCompaniesStore = new UserCompaniesStore()

ReactDOM.render((
  // Reference for middleware is not a function error
  // https://github.com/reactjs/redux/issues/533
  <Provider currentUserStore={currentUserStore} serverStore={serverStore} userCompaniesStore={userCompaniesStore}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='login' component={Login} />
        <Route path='profile' component={ProfileContainer} />
        <Route path='preDashboard' component={PreDashboard} />
        <Route path='company/create' component={CreateCompany} />
        <Route path='company/:companyId' component={CompanyRoot}>
          <Route path='dashboard' component={Dashboard}>
            <IndexRoute component={DashboardWelcome} />
            <Route path='profile' component={Profile} />
            <Route path='company' component={DashboardCompany} />
            <Route path='contact' component={DashboardContact} />
            <Route path='subscription' component={DashboardSubscription} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app')
)
