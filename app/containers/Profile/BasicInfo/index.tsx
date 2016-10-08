import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {CurrentUserStore} from '../../../stores/CurrentUserStore'
import {EmailDisplayRow} from './EmailRow'
import {NameDisplayRow, NameEditRow} from './NameRow'
import {PhoneDisplayRow, PhoneEditRow} from './PhoneRow'

interface StoreProps {
  currentUserStore?: CurrentUserStore
}

interface OwnState {
  isNameEdit: boolean
  isPhoneEdit: boolean
}

@inject('currentUserStore')
@observer
export class BasicInfo extends React.Component<StoreProps, OwnState> {

  constructor() {
    super()
    this.state = {
      isNameEdit: false,
      isPhoneEdit: false
    }
  }

  componentDidMount() {
    this.props.currentUserStore!.getCurrentUser()
  }

  toggleEdit(field: string) {
    if (field === 'name') {
      this.setState({
        isNameEdit: !this.state.isNameEdit,
        isPhoneEdit: this.state.isPhoneEdit
      })
    } else if (field === 'phone') {
      this.setState({
        isNameEdit: this.state.isNameEdit,
        isPhoneEdit: !this.state.isPhoneEdit
      })
    }
  }

  save(updateObject: any) {
    this.props.currentUserStore!.updateUser(updateObject).then(() => {
      this.props.currentUserStore!.getCurrentUser()
      this.setState({
        isNameEdit: false,
        isPhoneEdit: false
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    if (!this.props.currentUserStore!.currentUser) {
      return (
        <div className='container-fluid'>
          <div className='row'>
            <div style={{height: '3em'}} />
            <h1>Profile</h1>
            <p>Loading...</p>
          </div>
        </div>
      )
    }

    const user = this.props.currentUserStore!.currentUser!

    const nameRow = this.state.isNameEdit ?
      <NameEditRow name={user.name}
                   onClickSave={this.save.bind(this)}
                   onClickCancel={this.toggleEdit.bind(this, 'name')} /> :
      <NameDisplayRow name={user.name} onClickEdit={this.toggleEdit.bind(this, 'name')} />

    const phoneRow = this.state.isPhoneEdit ?
      <PhoneEditRow phone={user.phone}
                    isPhoneVerified={user.isPhoneVerified}
                    onClickSave={this.save.bind(this)}
                    onClickCancel={this.toggleEdit.bind(this, 'phone')} /> :
      <PhoneDisplayRow phone={user.phone}
                       isPhoneVerified={user.isPhoneVerified}
                       onClickEdit={this.toggleEdit.bind(this, 'phone')} />

    return (
      <table className='table'>
        <tbody>
          <EmailDisplayRow email={user.email} isEmailVerified={user.isPhoneVerified} />
          {nameRow}
          {phoneRow}
          <tr>
            <td>Facebook</td>
            <td>{user.facebookId || 'No account linked yet'}</td>
            <td><a href='#'>Link</a></td>
          </tr>
          <tr>
            <td>Google</td>
            <td>{user.googleId || 'No account linked yet'}</td>
            <td><a href='#'>Link</a></td>
          </tr>
        </tbody>
      </table>
    )
  }

}
