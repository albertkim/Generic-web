import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {ServerStore} from '../stores/ServerStore'
import {CurrentUserStore} from '../stores/CurrentUserStore'

interface StateProps {
  currentUserStore?: CurrentUserStore
  serverStore?: ServerStore
}

@inject('serverStore', 'currentUserStore')
@observer
export class NotificationBanner extends React.Component<StateProps, {show: boolean}> {

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

    } else if (this.props.serverStore.isConnectedToServer === 'Disconnected') {

      return (
        <div id='server-connection-notification-banner'>
          <span>There was an error connecting to the server</span>
          {closeButton}
        </div>
      )

    } else if (!this.props.currentUserStore.currentUser) {

      return (
        <span />
      )

    } else if (this.props.currentUserStore.currentUser.isEmailVerified === false) {

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
