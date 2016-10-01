import * as React from 'react'

interface DisplayStateProps {
  phone: string,
  isPhoneVerified: boolean,
  onEditClick: Function
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
    const editButton = <a href='#' onClick={this.props.onEditClick()}>Edit</a>

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
  onClickSave: Function
}

export class PhoneEditRow extends React.Component<EditStateProps, void> {
  render() {
    const saveButton = <a href='#' onClick={this.props.onClickSave()}>Save</a>

    return (
      <tr>
        <td>Phone</td>
        <td><input className='form-control' defaultValue={this.props.phone} /></td>
        <td>{saveButton}</td>
      </tr>
    )
  }
}
