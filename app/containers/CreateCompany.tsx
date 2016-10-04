import * as React from 'react'
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createCompany} from '../actions/company'
import {Company, ICreateCompany} from '../models/Company'

interface DispatchProps {
  createCompany: (createObject: ICreateCompany, callback: (error?: any, company?: Company) => void) => any
}

class CreateCompany extends React.Component<DispatchProps, void> {

  private nameInput: HTMLInputElement
  private descriptionInput: HTMLInputElement

  save(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    const name = this.nameInput.value
    const description = this.descriptionInput.value

    this.props.createCompany({
      name: name,
      description: description
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

        <div className='row'>

          <div className='col-md-6'>
            <form className='form'>
              <div className='form-group'>
                <span>Company name</span>
                <input className='form-control' ref={ref => this.nameInput = ref} />
              </div>
              <div className='form-group'>
                <span>Description</span>
                <input className='form-control' ref={ref => this.descriptionInput = ref} />
              </div>
              <button className='btn btn-primary' onClick={this.save.bind(this)}>Create</button>
            </form>
          </div>

          <div>
            <p>Create your company here.</p>
          </div>

        </div>

      </div>
    )

  }

}

export default connect(null, {createCompany})(CreateCompany)
