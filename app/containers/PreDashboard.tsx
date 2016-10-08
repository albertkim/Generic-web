import * as React from 'react'
import {Link} from 'react-router'
import {inject, observer} from 'mobx-react'
import {UserCompaniesStore} from '../stores/UserCompaniesStore'

// Sidebar reference: https://github.com/BlackrockDigital/startbootstrap-simple-sidebar
@inject('userCompaniesStore')
@observer
export class PreDashboard extends React.Component<{userCompaniesStore: UserCompaniesStore}, void> {
  componentDidMount() {
    this.props.userCompaniesStore.getMyCompanies()
  }

  render() {
    return (
      <div className='container'>
        <div style={{height: '5em'}} />
        {this.props.userCompaniesStore.myCompanies.map(companyUser => {
          const dashboardLink = `/company/${companyUser.company.id}/dashboard`
          return (
            <div key={companyUser.company.id}>
              <h1>{companyUser.company.name}</h1>
              <Link to={dashboardLink}>Go to dashboard</Link>
            </div>
          )
        })}
        <h3>Or create a new company</h3>
        <Link to='/company/create'>Create a new company</Link>
      </div>
    )
  }
}
