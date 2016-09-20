import * as React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {User} from './models/User'

interface NotificationBannerProps {
  user?: User
}

function mapStateToProps(state: any) : NotificationBannerProps {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch: any) {
  return {}
}

class NotificationBanner extends React.Component<NotificationBannerProps, void> {

  render() {
    const style = {
      position: 'fixed',
      width: '100%',
      top: '50px',
      height: '3em',
      backgroundColor: 'orange',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9
    }
    if (!this.props.user) {
      return <div style={{height: '50px'}} />
    } else if (this.props.user.isEmailVerified) {
      return <div style={{height: '50px'}} />
    } else {
      return (
        <div className='container-fluid'>
          <div className='row'>
            <div style={{height: '50px'}} />
            <div style={style}>
              <span style={{marginRight: '2em'}}>Please verify your email</span>
              <button className='btn btn-default'>Resend verification</button>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBanner)
