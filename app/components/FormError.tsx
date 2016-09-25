import * as React from 'react'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {IError} from '../models/Error'

interface StateProps {
  type: string,
  errors: IError[]
}

interface DispatchProps {}

function mapStateToProps(state: ApplicationState) {
  return {
    errors: state.errors
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {}
}

class FormError extends React.Component<StateProps & DispatchProps, void> {
  render() {
    if (this.props.type) {
      const type = this.props.type
      const foundError = this.props.errors.find(error => error.type === type)
      if (foundError) {
        return <span className='label label-danger'>{foundError.message}</span>
      } else {
        return <span />
      }
    } else {
      return <span />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormError)
