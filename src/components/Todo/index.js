import React from 'react';
import { TodoElement } from './TodoElement'
import { TodoForm } from './TodoForm'

export class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }

  submit(text) {
    this.props.submit(text);
  }

  render() {
    var todoElementList = this.props.todos.map(todo => {
      return <TodoElement todo={ todo } />
    });
    return (
      <div className="col-md-3">
        { todoElementList }
        <TodoForm submit={ this.submit.bind(this) } />
      </div>
    )
  }
}

Todo.propTypes = {
  todos: React.PropTypes.array.isRequired,
  submit: React.PropTypes.func.isRequired
}
