import * as React from 'react'

interface DisplayStateProps {
  name: string,
  onClickEdit: Function
}

export class NameDisplayRow extends React.Component<DisplayStateProps, void> {
  render() {
    const editButton = <a href='#' onClick={() => this.props.onClickEdit()}>Edit</a>

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
  onClickCancel: Function
}

export class NameEditRow extends React.Component<EditStateProps, void> {
  private nameInput: HTMLInputElement

  save() {
    this.props.onClickSave({
      name: this.nameInput.value
    })
  }

  cancel() {
    this.props.onClickCancel()
  }

  render() {
    const saveButton = <a className='btn btn-primary' onClick={this.save.bind(this)}>Save</a>
    const cancelButton = <a className='btn btn-default' onClick={this.cancel.bind(this)}>Cancel</a>

    return (
      <tr>
        <td><strong>Name</strong></td>
        <td><input className='form-control' defaultValue={this.props.name} ref={ref => this.nameInput = ref} /></td>
        <td><span style={{marginRight: '1em'}}>{saveButton}</span><span>{cancelButton}</span></td>
      </tr>
    )
  }
}
