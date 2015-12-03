import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import NavigationBar from './components/NavigationBar';
import Bootstrap from './libraries/bootstrap.min.css';

import { Home } from './views/home';
import { Register } from './views/register';
import { Login } from './views/login';
import { About } from './views/about';
import { Contact } from './views/contact';
import { Profile } from './views/profile';

const App = React.createClass({
	render() {
		return (
			<div>
				<NavigationBar />
				<div className="container">
					{ this.props.children }
				</div>
			</div>
		);
	}
});

ReactDOM.render((
	<Router history={ createBrowserHistory() }>
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
);
