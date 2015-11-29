import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import NavigationBar from './components/NavigationBar';
import Bootstrap from './libraries/bootstrap.min.css';

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

const Home = React.createClass({
	render() {
		return (
			<div className="container">
				Home!
			</div>
		);
	}
});

const About = React.createClass({
	render() {
		return (
			<div className="container">
				About!
			</div>
		);
	}
});

const Contact = React.createClass({
	render() {
		return (
			<div className="container">
				Contact!
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
		</Route>
	</Router>
	), document.getElementById('app')
);