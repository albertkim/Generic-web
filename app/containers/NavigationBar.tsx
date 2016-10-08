import * as React from 'react'
import {Link} from 'react-router'
import {inject, observer} from 'mobx-react'
import {CurrentUserStore} from '../stores/CurrentUserStore'
import {ServerStore} from '../stores/ServerStore'

@inject('currentUserStore', 'serverStore')
@observer
export class NavigationBar extends React.Component<{currentUserStore?: CurrentUserStore, serverStore?: ServerStore}, void> {

  logout() {
    this.props.currentUserStore.logout()
  }

  getConnectedToServer() {
    if (this.props.serverStore.isConnectedToServer === 'Connecting') {
      // Server connection hasn't finished yet
      return <span className='label label-default'>Connecting...</span>
    } else if (this.props.serverStore.isConnectedToServer === 'Connected') {
      return <span className='label label-success'>Connected to API server</span>
    } else if (this.props.serverStore.isConnectedToServer === 'Disconnected') {
      return <span className='label label-danger'>Our servers are currently down</span>
    }
  }

  render() {
    let profileSection: JSX.Element

    if (this.props.currentUserStore.currentUser) {
      profileSection = (
        <ul className='nav navbar-nav navbar-right'>
          <li><Link to='/preDashboard'>Dashboard</Link></li>
          <li><Link to='/profile'>{this.props.currentUserStore.currentUser.email}</Link></li>
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
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-left'>
              <li><a>{this.getConnectedToServer()}</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              {profileSection}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
