import * as React from 'react'
import {connect} from 'react-redux'
import {getCompany} from '../actions/company'
import {ApplicationState} from '../models/ApplicationState'
import {Company} from '../models/Company'

interface OwnProps {
  params: any
}

interface StateProps {
  company: Company
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    company: state.company
  }
}

interface DispatchProps {
  getCompany: Function
}

class CompanyRoot extends React.Component<StateProps & DispatchProps & OwnProps, void> {
  componentDidMount() {
    this.props.getCompany(this.props.params.companyId)
  }

  render() {
    if (!this.props.company) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, {getCompany})(CompanyRoot)
