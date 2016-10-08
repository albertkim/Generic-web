import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {CurrentCompanyStore} from '../../../stores/CurrentCompanyStore'

interface StoreProps {
  currentCompanyStore: CurrentCompanyStore
}

@inject('currentCompanyStore')
@observer
export class DashboardSubscription extends React.Component<StoreProps, void> {

  render() {
    const company = this.props.currentCompanyStore!.company!

    return (
      <div className='row'>
        <div className='col-md-12'>
          <h1>{company.name}</h1>
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
