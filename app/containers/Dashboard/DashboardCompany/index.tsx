import * as React from 'react'
import {connect} from 'react-redux'
import {ApplicationState} from '../../../models/ApplicationState'
import {Company} from '../../../models/Company'
import {EditableTextTableRow} from '../../../components/EditableTextTableRow'
import {getCompany, updateCompany} from '../../../actions/company'

interface OwnState {
  isNameEdit: boolean,
  isDescriptionEdit: boolean
}

interface StateProps {
  company: Company
}

interface DispatchProps {
  getCompany: Function
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
    this.props.updateCompany(updateObject).then(() => {
      this.props.getCompany(this.props.company.id)
      this.setState({
        isNameEdit: false,
        isDescriptionEdit: false
      })
    })
  }

  render() {
    let nameRow = <EditableTextTableRow
                    fieldName={'Name'}
                    value={this.props.company.name}
                    isEdit={this.state.isNameEdit}
                    onClickSave={value => this.save({name: value})}
                    onClickEdit={this.toggleEdit.bind(this, 'name')} />
    let descriptionRow = <EditableTextTableRow
                          fieldName={'Description'}
                          value={this.props.company.description}
                          isEdit={this.state.isDescriptionEdit}
                          onClickSave={value => this.save({description: value})}
                          onClickEdit={this.toggleEdit.bind(this, 'description')} />

    return (
      <div className='row'>
        <div className='col-md-12'>
          <h1>{this.props.company.name}</h1>
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

export default connect(mapStateToProps, {updateCompany, getCompany})(DashboardCompany)
