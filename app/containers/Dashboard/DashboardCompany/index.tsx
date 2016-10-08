import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {CurrentCompanyStore} from '../../../stores/CurrentCompanyStore'
import {EditableTextTableRow} from '../../../components/EditableTextTableRow'

interface OwnState {
  isNameEdit: boolean,
  isDescriptionEdit: boolean
}

interface StoreProps {
  currentCompanyStore: CurrentCompanyStore
}

@inject('currentCompanyStore')
@observer
export class DashboardCompany extends React.Component<StoreProps, OwnState> {

  constructor() {
    super()
    this.state = {
      isNameEdit: false,
      isDescriptionEdit: false
    }
  }

  toggleEdit(field: string) {
    if (field === 'name') {
      this.setState({
        isNameEdit: !this.state.isNameEdit,
        isDescriptionEdit: this.state.isDescriptionEdit
      })
    }
    if (field === 'description') {
      this.setState({
        isNameEdit: this.state.isNameEdit,
        isDescriptionEdit: !this.state.isDescriptionEdit
      })
    }
  }

  save(updateObject: any) {
    updateObject.id = this.props.currentCompanyStore!.company!.id
    this.props.currentCompanyStore!.update(updateObject).then(() => {
      this.setState({
        isNameEdit: false,
        isDescriptionEdit: false
      })
    })
  }

  render() {
    const company = this.props.currentCompanyStore!.company!

    let nameRow = <EditableTextTableRow
                    fieldName={'Name'}
                    value={company.name}
                    isEdit={this.state.isNameEdit}
                    onClickSave={value => this.save({name: value})}
                    onClickEdit={this.toggleEdit.bind(this, 'name')} />
    let descriptionRow = <EditableTextTableRow
                          fieldName={'Description'}
                          value={company.description}
                          isEdit={this.state.isDescriptionEdit}
                          onClickSave={value => this.save({description: value})}
                          onClickEdit={this.toggleEdit.bind(this, 'description')} />

    return (
      <div className='row'>
        <div className='col-md-12'>
          <h1>{company.name}</h1>
        </div>
        <div className='col-md-6'>
          <div className='col-md-12'>
            <h3>Basic info</h3>
          </div>
          <div className='col-md-12'>
            <table className='table '>
              <tbody>
                {nameRow}
                {descriptionRow}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

