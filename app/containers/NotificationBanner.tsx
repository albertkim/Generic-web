import * as React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {User} from '../models/User'
import {ApplicationState} from '../models/ApplicationState'

interface OwnState {
  show: boolean
}

interface NotificationBannerProps {
  user: User,
  isConnectedToServer?: boolean
}

function mapStateToProps(state: ApplicationState): NotificationBannerProps {
  return {
    user: state.user,
    isConnectedToServer: state.isConnectedToServer
  }
}

function mapDispatchToProps(dispatch: any) {
  return {}
}

class NotificationBanner extends React.Component<NotificationBannerProps, OwnState> {

  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  close() {
    this.setState({
      show: false
    })
  }

  getBody() {
    const closeButton = <a style={{marginLeft: '2em', marginRight: '2em'}} onClick={() => this.close()}>Close</a>

    if (this.state.show === false) {

      return (
        <span />
      )

    } else if (this.props.isConnectedToServer === false) {

      return (
        <div id='server-connection-notification-banner'>
          <span>There was an error connecting to the server</span>
          {closeButton}
        </div>
      )

    } else if (!this.props.user) {

      return (
        <span />
      )

    } else if (this.props.user.isEmailVerified === false) {

      return (
        <div id='verify-email-notification-banner'>
          <span style={{marginRight: '2em'}}>Please verify your email</span>
          <button className='btn btn-default'>Resend verification</button>
          {closeButton}
        </div>
      )

    }
  }

  render() {
    const heightPadding = <div style={{height: '50px'}} />

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div style={{height: '50px'}} />
          {this.getBody()}
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBanner)
