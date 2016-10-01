import * as React from 'react'

interface DisplayStateProps {
  email: string,
  isEmailVerified: boolean
}

export class EmailDisplayRow extends React.Component<DisplayStateProps, void> {

  getEmailDisplay() {
    if (this.props.isEmailVerified) {
      return (
        <span>
        <span>{this.props.email} </span>
        <span className='label label-success'>Verified</span>
      </span>
      )
    } else {
      return (
        <span>
          <span>{this.props.email} </span>
          <span className='label label-warning'>Unverified</span>
        </span>
      )
    }
  }

  getActionLabel() {
    if (this.props.isEmailVerified) {
      return <span></span>
    } else {
      return <span>Waiting for verification</span>
    }
  }

  render() {
    return (
      <tr>
        <td>Email</td>
        <td>{this.getEmailDisplay()}</td>
        <td>{this.getActionLabel()}</td>
      </tr>
    )
  }

}
