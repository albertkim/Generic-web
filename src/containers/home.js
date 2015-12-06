import React from 'react';

var defaultTodo = [
  {
    text: 'This is a default todo',
  },
  {
    text: 'This is another todo'
  }
]

export class Home extends React.Component {
  render() {
		return (
			<div className="container">
        <h1>Home</h1>
        <hr />
			</div>
		);
	}
}
