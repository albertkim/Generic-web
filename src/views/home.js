import React from 'react';
import { Todo } from '../components/Todo'

export class Home extends React.Component {
  render() {
		return (
			<div className="container">
        <h1>Home</h1>
        <hr />
        <Todo />
			</div>
		);
	}
}
