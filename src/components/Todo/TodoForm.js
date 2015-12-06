import React from 'react';

export class TodoForm extends React.Component {
  submit() {
    var text = this.refs.input.value
    this.props.submit(text);
    this.refs.input.value = '';
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control" placeholder="Todo" ref="input"></input>
        <button className="btn btn-primary" onClick={ this.submit.bind(this) }>Add</button>
      </div>
    )
  }
}

TodoForm.propTypes = {
  submit: React.PropTypes.func.isRequired
}
