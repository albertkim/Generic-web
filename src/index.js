import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
// import './libraries/bootstrap.css'

import { App } from './containers/App'
import { NavigationBar } from './components/NavigationBar'
import { Home } from './containers/home'
import { TodoContainer } from './containers/todoContainer'
import { Register } from './containers/register'
import { Login } from './containers/login'
import { About } from './containers/about'
import { Contact } from './containers/contact'
import { Profile } from './containers/profile'

ReactDOM.render((
	<Router history={ createBrowserHistory() }>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="todo" component={ TodoContainer } />
			<Route path="about" component={ About } />
			<Route path="contact" component={ Contact } />
			<Route path="login" component={ Login } />
			<Route path="register" component={ Register } />
			<Route path="profile" component={ Profile } />
		</Route>
	</Router>
	), document.getElementById('app')
);
