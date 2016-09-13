import * as React from 'react'
import {Link} from 'react-router'
import {AuthService} from '../services/AuthService'

interface NavigationBarState {
  email?: string
}

export class NavigationBar extends React.Component<{}, NavigationBarState> {

  constructor() {
    super()
    this.state = {
      email: null
    }
  }

  componentDidMount() {
    AuthService.getCurrentUser().then(user => {
      this.setState({
        email: user.email
      })
    }).catch(() => {
      this.setState({})
    })
  }

  logout() {
    AuthService.logout().then(() => {
      window.location.href = '/'
    })
  }

  render() {
    let profileSection: JSX.Element
    if (AuthService.isLoggedIn()) {
      profileSection = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profile">{ this.state.email }</Link></li>
          <li><a href="" onClick={ this.logout }>Logout</a></li>
        </ul>
      )
    } else {
      profileSection = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <p className='navbar-btn'>
              <Link to="/login" className='btn btn-default' style={{ marginRight: '1em', marginLeft: '1em' }}>Login</Link>
            </p>
          </li>
          <li>
            <p className='navbar-btn'>
              <Link to="/register" className='btn btn-primary' style={{ marginRight: '2em' }}>Register</Link>
            </p>
          </li>
        </ul>
      )
    }

    return(
      <nav className="navbar navbar-default navbar-fixed-top" id='navigation-bar'>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Generic-web</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              { profileSection }
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
