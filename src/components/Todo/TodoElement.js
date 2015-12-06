import React from 'react';

export class TodoElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.todo.text }
      </div>
    )
  }
}
