import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../../../models/ApplicationState'
import {User} from '../../../models/User'
import {fetchCurrentUser} from '../../../actions/actions'
import {updateUser} from '../../../actions/user'
import {EmailDisplayRow} from './EmailRow'
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
    console.log(updateObject)
    this.props.updateUser(updateObject, (error: any, response: any) => {
      if (error) {
        console.log(error)
      } else {
        this.props.fetchCurrentUser()
        this.setState({
          isNameEdit: false,
          isPhoneEdit: false
        })
      }
    })
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
      <NameEditRow name={this.props.user.name}
                   onClickSave={this.save.bind(this)}
                   onClickCancel={this.toggleEdit.bind(this, 'name')} /> :
      <NameDisplayRow name={this.props.user.name} onClickEdit={this.toggleEdit.bind(this, 'name')} />

    const phoneRow = this.state.isPhoneEdit ?
      <PhoneEditRow phone={this.props.user.phone}
                    isPhoneVerified={this.props.user.isPhoneVerified}
                    onClickSave={this.save.bind(this)}
                    onClickCancel={this.toggleEdit.bind(this, 'phone')} /> :
      <PhoneDisplayRow phone={this.props.user.phone}
                       isPhoneVerified={this.props.user.isPhoneVerified}
                       onClickEdit={this.toggleEdit.bind(this, 'phone')} />

    return (
      <table className='table'>
        <tbody>
          <EmailDisplayRow email={this.props.user.email} isEmailVerified={this.props.user.isEmailVerified} />
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
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
