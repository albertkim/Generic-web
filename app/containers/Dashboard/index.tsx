import * as React from 'react'
import {Link} from 'react-router'

// Sidebar reference: https://github.com/BlackrockDigital/startbootstrap-simple-sidebar
export default class Dashboard extends React.Component<void, void> {
  render() {
    return (

      <div>
        <div id='wrapper'>

          <div id='sidebar-wrapper'>
            <ul className='sidebar-nav'>
              <li>
                <Link to='/dashboard/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/dashboard/company'>Company</Link>
              </li>
              <li>
                <a href='#'>Subscription</a>
              </li>
              <li>
                <a href='#'>Events</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <Link to='/dashboard/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <div id='page-content-wrapper'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12'>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
