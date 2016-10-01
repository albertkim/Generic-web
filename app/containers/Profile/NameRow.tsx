import * as React from 'react'

interface DisplayStateProps {
  name: string,
  onEditClick: Function
}

export class NameDisplayRow extends React.Component<DisplayStateProps, void> {
  render() {
    const editButton = <a href='#' onClick={this.props.onEditClick()}>Edit</a>

    return (
      <tr>
        <td>Name</td>
        <td>{this.props.name}</td>
        <td>{editButton}</td>
      </tr>
    )
  }
}

interface EditStateProps {
  name: string,
  onClickSave: Function
}

export class NameEditRow extends React.Component<EditStateProps, void> {
  render() {
    const saveButton = <a href='#' onClick={this.props.onClickSave()}>Save</a>

    return (
      <tr>
        <td>Name</td>
        <td><input className='form-control' defaultValue={this.props.name} /></td>
        <td>{saveButton}</td>
      </tr>
    )
  }
}
