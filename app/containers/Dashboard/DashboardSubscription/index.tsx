import * as React from 'react'
import {connect} from 'react-redux'
import {ApplicationState} from '../../../models/ApplicationState'
import {Company} from '../../../models/Company'
import {getCompany, updateCompany} from '../../../actions/company'

interface OwnState {

}

interface StateProps {
  company: Company
}

interface DispatchProps {
  getCompany: Function
  updateCompany: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    company: state.company
  }
}

class DashboardSubscription extends React.Component<StateProps & DispatchProps, OwnState> {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <h1>{this.props.company.name}</h1>
        </div>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <h3>Subscription</h3>
          </div>
          <div className='col-md-12'>

          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, {updateCompany, getCompany})(DashboardSubscription)
