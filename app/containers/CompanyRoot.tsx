import * as React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getCompany} from '../actions/company'

interface OwnProps {
  params: any
}

interface DispatchProps {
  getCompany: Function
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    getCompany: bindActionCreators(getCompany, dispatch)
  }
}

class CompanyRoot extends React.Component<DispatchProps & OwnProps, void> {
  componentDidMount() {
    this.props.getCompany(this.props.params.companyId)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CompanyRoot)
