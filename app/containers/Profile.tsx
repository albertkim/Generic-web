import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {User} from '../models/User'
import {fetchCurrentUser} from '../actions'

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
      return (<p><span>{this.props.user.email}</span><span>(Verified)</span></p>)
    } else {
      return (<p><span>{this.props.user.email}</span><span>(Not verified)</span></p>)
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Profile</h1>
        <hr />
        <p>{this.getEmailDisplay.bind(this)}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
