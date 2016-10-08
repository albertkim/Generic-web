import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {CurrentCompanyStore} from '../stores/CurrentCompanyStore'
import {Company} from '../models/Company'

interface Props {
  currentCompanyStore?: CurrentCompanyStore
  params: any
}

@inject('currentCompanyStore')
@observer
export class CompanyRoot extends React.Component<Props, void> {
  componentDidMount() {
    this.props.currentCompanyStore!.getById(this.props.params.companyId)
  }

  render() {
    if (!this.props.currentCompanyStore!.company) {
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
