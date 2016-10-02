import * as React from 'react'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createCompany} from '../actions/company'
import {Company, ICreateCompany} from '../models/Company'

interface DispatchProps {
  createCompany: (createObject: ICreateCompany, callback: (error?: any, company?: Company) => void) => any
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    createCompany: bindActionCreators(createCompany, dispatch)
  }
}

class CreateCompany extends React.Component<DispatchProps, void> {

  save() {
    this.props.createCompany({
      name: 'New company',
      description: 'Test'
    }, (error: any, company: Company) => {
      if (!error) {
        browserHistory.push(`/company/${company.id}/dashboard`)
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>Create a company</h1>
        <hr />
        <button className='btn btn-primary' onClick={() => this.save()}>Create</button>
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(CreateCompany)
