import * as React from 'react'

interface DisplayStateProps {
  isEdit: boolean,
  fieldName: string,
  value: string,
  onClickSave: (value: string) => void
  onClickEdit: () => void
}

export class EditableTextTableRow extends React.Component<DisplayStateProps, void> {
  private nameInput: HTMLInputElement

  save() {
    this.props.onClickSave(this.nameInput.value)
  }

  cancel() {
    this.props.onClickEdit()
  }

  render() {
    if (this.props.isEdit) {

      const saveButton = <a className='btn btn-primary' onClick={this.save.bind(this)}>Save</a>
      const cancelButton = <a className='btn btn-default' onClick={this.cancel.bind(this)}>Cancel</a>
      return (
        <tr>
          <td><strong>{this.props.fieldName}</strong></td>
          <td><input className='form-control' defaultValue={this.props.value} ref={ref => this.nameInput = ref} /></td>
          <td><span style={{marginRight: '1em'}}>{saveButton}</span><span>{cancelButton}</span></td>
        </tr>
      )

    } else {

      const editButton = <a href='#' onClick={() => this.props.onClickEdit()}>Edit</a>
      return (
        <tr>
          <td>{this.props.fieldName}</td>
          <td>{this.props.value}</td>
          <td>{editButton}</td>
        </tr>
      )

    }
  }
}
