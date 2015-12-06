import React from 'react';
import { Todo } from '../components/Todo'

export class TodoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          text: 'This is a default todo',
        },
        {
          text: 'This is another todo'
        }
      ]
    }
  }

  submit(text) {
    this.state.todos.push({
      text: text
    })
    this.setState(this.state);
  }

  render() {
		return (
			<div className="container">
        <h1>Todo</h1>
        <hr />
        <Todo todos={ this.state.todos } submit={ this.submit.bind(this) }/>
			</div>
		);
	}
}
