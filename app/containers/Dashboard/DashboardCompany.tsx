import * as React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../../models/ApplicationState'
import {Company} from '../../models/Company'

interface StateProps {
  company: Company
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    company: state.company
  }
}

class DashboardCompany extends React.Component<StateProps, void> {
  render() {
    return (
      <div className='container'>
        <h1>Company: {this.props.company.name}</h1>
        <hr />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(DashboardCompany)
