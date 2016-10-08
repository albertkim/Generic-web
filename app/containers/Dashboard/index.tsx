import * as React from 'react'
import {Link} from 'react-router'

export class Dashboard extends React.Component<{params: {companyId: number}}, void> {

  render() {
    const companyDashboardUrl = `/company/${this.props.params.companyId}/dashboard`

    return (

      <div>
        <div id='wrapper'>

          <div id='sidebar-wrapper'>
            <ul className='sidebar-nav'>
              <li>
                <Link to={`${companyDashboardUrl}/profile`}>Profile</Link>
              </li>
              <li>
                <Link to={`${companyDashboardUrl}/company`}>Company</Link>
              </li>
              <li>
                <Link to={`${companyDashboardUrl}/subscription`}>Subscription</Link>
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
                <Link to={`${companyDashboardUrl}/contact`}>Contact</Link>
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
