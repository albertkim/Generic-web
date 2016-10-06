import * as React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {IAction} from '../actions/actions'
import {createCompany, CREATE_COMPANY_REQUEST} from '../actions/company'
import {ICreateCompany} from '../models/Company'

interface DispatchProps {
  createCompany: (createObject: ICreateCompany) => Promise<IAction<CREATE_COMPANY_REQUEST>>
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
    }).then(action => {
      if (action.error) {
        console.log(action.error)
      } else {
        browserHistory.push(`/company/${action.payload.id}/dashboard`)
      }
    })
  }

  render() {

    return (
      <div className='container'>
        <h1>Create a company</h1>

        <div className='row'>

          <div className='col-sm-6'>
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

          <div className='col-sm-6'>
            <p>Create your company here.</p>
          </div>

        </div>

      </div>
    )

  }

}

export default connect(null, {createCompany})(CreateCompany)
