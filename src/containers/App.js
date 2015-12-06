import React from 'react'
import NavigationBar from '../components/NavigationBar'

export class App extends React.Component {
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
}
