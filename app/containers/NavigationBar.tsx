import * as React from 'react'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {User} from '../models/User'
import {logout} from '../actions/actions'

interface StateProps {
  user?: User,
  isConnectedToServer?: boolean
}

interface DispatchProps {
  logout: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    user: state.user,
    isConnectedToServer: state.isConnectedToServer
  }
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}

class NavigationBar extends React.Component<StateProps & DispatchProps, void> {

  logout() {
    this.props.logout()
  }

  getConnectedToServer() {
    if (this.props.isConnectedToServer == null) {
      // Server connection hasn't finished yet
      return <span className='label label-default'>Connecting...</span>
    } else if (this.props.isConnectedToServer === true) {
      return <span className='label label-success'>Up and running!</span>
    } else if (this.props.isConnectedToServer === false) {
      return <span className='label label-danger'>Our servers are currently down</span>
    }
  }

  render() {
    let profileSection: JSX.Element

    if (this.props.user) {
      profileSection = (
        <ul className='nav navbar-nav navbar-right'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/profile'>{this.props.user.email}</Link></li>
          <li><a href='#' onClick={this.logout.bind(this)} style={{marginRight: '2em'}}>Logout</a></li>
          {/*<li><a href='' onClick={() => this.logout()}>Logout</a></li>*/}
        </ul>
      )
    } else {
      profileSection = (
        <ul className='nav navbar-nav navbar-right'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>
            <p className='navbar-btn'>
              <Link to='/login' className='btn btn-primary' style={{marginRight: '2em'}}>Login / Register</Link>
            </p>
          </li>
        </ul>
      )
    }

    return (
      <nav className='navbar navbar-default navbar-fixed-top' id='navigation-bar'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#navbar'
              aria-expanded='false'
              aria-controls='navbar'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link to='/' className='navbar-brand'>Generic-web</Link>
            {this.getConnectedToServer()}
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              {profileSection}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
