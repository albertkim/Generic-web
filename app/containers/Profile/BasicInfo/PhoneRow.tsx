import * as React from 'react'

interface DisplayStateProps {
  phone: string,
  isPhoneVerified: boolean,
  onClickEdit: Function
}

export class PhoneDisplayRow extends React.Component<DisplayStateProps, void> {
  getPhoneDisplay(phone: string | null, isPhoneVerified: boolean) {
    const phoneString = phone || 'No phone number'
    if (isPhoneVerified) {
      return (<span><span>{phoneString} </span><span className='label label-success'>Verified</span></span>)
    } else {
      return (<span><span>{phoneString} </span><span className='label label-warning'>Unverified</span></span>)
    }
  }

  render() {
    const editButton = <a href='#' onClick={() => this.props.onClickEdit()}>Edit</a>

    return (
      <tr>
        <td>Phone</td>
        <td>{this.getPhoneDisplay(this.props.phone, this.props.isPhoneVerified)}</td>
        <td>{editButton}</td>
      </tr>
    )
  }
}

interface EditStateProps {
  phone: string,
  isPhoneVerified: boolean,
  onClickSave: Function,
  onClickCancel: Function
}

export class PhoneEditRow extends React.Component<EditStateProps, void> {
  private phoneInput: HTMLInputElement

  save() {
    this.props.onClickSave({
      phone: this.phoneInput.value
    })
  }

  render() {
    const saveButton = <a className='btn btn-primary' onClick={this.save.bind(this)}>Save</a>
    const cancelButton = <a className='btn btn-default' onClick={() => this.props.onClickCancel()}>Cancel</a>

    return (
      <tr>
        <td><strong>Phone</strong></td>
        <td><input className='form-control' defaultValue={this.props.phone} ref={ref => this.phoneInput = ref} /></td>
        <td><span style={{marginRight: '1em'}}>{saveButton}</span><span>{cancelButton}</span></td>
      </tr>
    )
  }
}
