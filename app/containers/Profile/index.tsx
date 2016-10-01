import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../../models/ApplicationState'
import {User} from '../../models/User'
import {fetchCurrentUser} from '../../actions/actions'
import {updateUser} from '../../actions/user'
import {NameDisplayRow, NameEditRow} from './NameRow'
import {PhoneDisplayRow, PhoneEditRow} from './PhoneRow'

interface StateProps {
  user?: User
}

interface DispatchProps {
  fetchCurrentUser: Function,
  updateUser: Function
}

interface OwnState {
  isNameEdit: boolean
  isPhoneEdit: boolean
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    fetchCurrentUser: bindActionCreators(fetchCurrentUser, dispatch),
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

class Profile extends React.Component<StateProps & DispatchProps, OwnState> {

  constructor() {
    super()
    this.state = {
      isNameEdit: false,
      isPhoneEdit: false
    }
  }

  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  getEmailDisplay() {
    if (this.props.user.isEmailVerified) {
      return (
        <span>
        <span>{this.props.user.email} </span>
        <span className='label label-success'>Verified</span>
      </span>
      )
    } else {
      return (
        <span>
          <span>{this.props.user.email} </span>
          <span className='label label-warning'>Unverified</span>
        </span>
      )
    }
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

  save() {
    this.props.updateUser()
  }

  render() {
    if (!this.props.user) {
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

    const nameRow = this.state.isNameEdit ?
      <NameEditRow name={this.props.user.name} onClickSave={() => this.toggleEdit.bind(this, 'name')} /> :
      <NameDisplayRow name={this.props.user.name} onEditClick={() => this.toggleEdit.bind(this, 'name')} />

    const phoneRow = this.state.isPhoneEdit ?
      <PhoneEditRow phone={this.props.user.phone} onClickSave={() => this.toggleEdit.bind(this, 'phone')} /> :
      <PhoneDisplayRow phone={this.props.user.phone}
                       isPhoneVerified={this.props.user.isPhoneVerified}
                       onEditClick={() => this.toggleEdit.bind(this, 'phone')} />

    return (
      <div className='container'>
        <div className='row'>
          <div style={{height: '3em'}} />
          <h1>Profile</h1>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <table className='table'>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{this.getEmailDisplay()}</td>
                  <td>Waiting for verification</td>
                </tr>
                {nameRow}
                {phoneRow}
                <tr>
                  <td>Facebook</td>
                  <td>{this.props.user.facebookId || 'No account linked yet'}</td>
                  <td><a href='#'>Link</a></td>
                </tr>
                <tr>
                  <td>Google</td>
                  <td>{this.props.user.googleId || 'No account linked yet'}</td>
                  <td><a href='#'>Link</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
