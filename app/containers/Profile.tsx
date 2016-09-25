import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {User} from '../models/User'
import {fetchCurrentUser} from '../actions/actions'

interface StateProps {
  user?: User
}

interface DispatchProps {
  fetchCurrentUser: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    fetchCurrentUser: bindActionCreators(fetchCurrentUser, dispatch)
  }
}

class Profile extends React.Component<StateProps & DispatchProps, void> {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  getEmailDisplay() {
    if (this.props.user.isEmailVerified) {
      return (<span><span>{this.props.user.email} </span><span className='label label-success'>Verified</span></span>)
    } else {
      return (<span><span>{this.props.user.email} </span><span className='label label-warning'>Unverified</span></span>)
    }
  }

  render() {
    if (!this.props.user) {
      return (<p>Loading...</p>)
    }

    return (
      <div className='container-fluid'>
        <h1>Profile</h1>
        <hr />
        <p><span>Email: </span>{this.getEmailDisplay()}</p>
        <p><span>Full name: </span>{this.props.user.name || 'No name entered yet'}</p>
        <p><span>Facebook: </span>{this.props.user.facebookId || 'No account linked yet'}</p>
        <p><span>Google: </span>{this.props.user.googleId || 'No account linked yet'}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
