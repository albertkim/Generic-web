import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {browserHistory} from 'react-router'
import {CurrentCompanyStore} from '../stores/CurrentCompanyStore'
import {ICreateCompany} from '../models/Company'

interface StoreProps {
  currentCompanyStore?: CurrentCompanyStore
}

@inject('currentCompanyStore')
@observer
export class CreateCompany extends React.Component<StoreProps, void> {

  private nameInput: HTMLInputElement
  private descriptionInput: HTMLInputElement

  save(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    const name = this.nameInput.value
    const description = this.descriptionInput.value

    this.props.currentCompanyStore!.create({
      name: name,
      description: description
    }).then(company => {
      browserHistory.push(`/company/${company.id}/dashboard`)
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
