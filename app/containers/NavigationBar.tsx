import * as React from 'react'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {User} from '../models/User'
import {AuthService} from '../services/AuthService'
import {Action, login, LOGIN_USER_REQUEST, logout} from '../actions'

interface StateProps {
  user?: User
}

interface DispatchProps {
  login: Function,
  logout: Function
}

function mapStateToProps(state: ApplicationState) : StateProps {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch: any) : DispatchProps {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch)
  }
}

class NavigationBar extends React.Component<StateProps & DispatchProps, void> {

  login() {
    this.props.login('test@test.com', 'password')
  }

  logout() {
    this.props.logout()
  }

  render() {
    let profileSection: JSX.Element
    
    if (this.props.user) {
      profileSection = (
        <ul className='nav navbar-nav navbar-right'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/profile'>{this.props.user.email}</Link></li>
          <li><a href='#' onClick={() => this.logout()} style={{marginRight: '2em'}}>Logout</a></li>
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
              <button className='btn btn-default' style={{marginRight: '1em', marginLeft: '1em'}} onClick={() => this.login()}>Login</button>
              {/* <Link to='/login' className='btn btn-default' style={{ marginRight: '1em', marginLeft: '1em' }}>Login</Link> */}
            </p>
          </li>
          <li>
            <p className='navbar-btn'>
              <Link to='/register' className='btn btn-primary' style={{marginRight: '2em'}}>Register</Link>
            </p>
          </li>
        </ul>
      )
    }

    return (
      <nav className='navbar navbar-default navbar-fixed-top' id='navigation-bar'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className='navbar-brand'>Generic-web</Link>
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
