import * as React from 'react'
import {connect} from 'react-redux'
import {ApplicationState} from '../../../models/ApplicationState'
import {Company} from '../../../models/Company'
import {EditableNameRow} from './NameRow'
import {updateCompany} from '../../../actions/company'

interface OwnState {
  isNameEdit: boolean,
  isDescriptionEdit: boolean
}

interface StateProps {
  company: Company
}

interface DispatchProps {
  updateCompany: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    company: state.company
  }
}

class DashboardCompany extends React.Component<StateProps & DispatchProps, OwnState> {

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
    updateObject.id = this.props.company.id
    this.props.updateCompany(updateObject)
  }

  render() {
    let nameRow = <EditableNameRow
                    fieldName={'name'}
                    value={this.props.company.name}
                    isEdit={this.state.isNameEdit}
                    onClickSave={value => this.save({name: value})}
                    onClickEdit={this.toggleEdit.bind(this, 'name')} />
    let descriptionRow = <EditableNameRow
                          fieldName={'description'}
                          value={this.props.company.description}
                          isEdit={this.state.isDescriptionEdit}
                          onClickSave={value => this.save({description: value})}
                          onClickEdit={this.toggleEdit.bind(this, 'description')} />

    return (
      <div>
        <h1>Company: {this.props.company.name}</h1>
        <div className='col-md-6'>
          <table className='table '>
            <tbody>
              {nameRow}
              {descriptionRow}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, {updateCompany})(DashboardCompany)
