import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {ApplicationState} from '../models/ApplicationState'
import {ICompanyUser} from '../models/Company'
import {getMyCompanies} from '../actions/user'

interface StateProps {
  companyUsers: ICompanyUser[]
}

interface DispatchProps {
  getMyCompanies: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    companyUsers: state.companyUsers
  }
}

// Sidebar reference: https://github.com/BlackrockDigital/startbootstrap-simple-sidebar
class PreDashboard extends React.Component<StateProps & DispatchProps, void> {
  componentDidMount() {
    this.props.getMyCompanies()
  }

  render() {
    return (
      <div className='container'>
        <div style={{height: '5em'}} />
        {this.props.companyUsers.map(companyUser => {
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

export default connect(mapStateToProps, {getMyCompanies})(PreDashboard)
