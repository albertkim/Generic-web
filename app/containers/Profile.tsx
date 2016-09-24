import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {User} from '../models/User'
import {fetchCurrentUser} from '../actions/actions'

interface StateProps {
  user?: User,
  isUserLoading: boolean
}

interface DispatchProps {
  fetchCurrentUser: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    user: state.user,
    isUserLoading: state.isUserLoading
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
      return (<p><span>{this.props.user.email}</span><span> (verified)</span></p>)
    } else {
      return (<p><span>{this.props.user.email}</span><span> (not verified)</span></p>)
    }
  }

  render() {
    if (this.props.isUserLoading) {
      return (<p>Loading...</p>)
    }

    if (!this.props.user) {
      return (<p>You are not logged in!</p>)
    }

    return (
      <div className='container-fluid'>
        <h1>Profile</h1>
        <hr />
        <p>{this.getEmailDisplay()}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
