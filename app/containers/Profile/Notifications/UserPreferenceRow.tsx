import * as React from 'react'
import {IUserPreference} from '../../../models/UserPreference'

export interface IUserPreferenceValueChange {
  preferenceId: number,
  value: boolean
}

interface StateProps {
  userPreference: IUserPreference,
  onDifferentValueClick: (change: IUserPreferenceValueChange) => void
}

export class UserPreferenceRow extends React.Component<StateProps, void> {

  yes() {
    this.props.onDifferentValueClick({
      preferenceId: this.props.userPreference.preference.id,
      value: true
    })
  }

  no() {
    this.props.onDifferentValueClick({
      preferenceId: this.props.userPreference.preference.id,
      value: false
    })
  }

  render() {
    const yesLabel = this.props.userPreference.value ?
                     <a><label className='label label-success'>Yes</label></a> :
                     <a href='#' onClick={() => this.yes()}><label className='label label-default'>Yes</label></a>
    const noLabel = this.props.userPreference.value ?
                    <a href='#' onClick={() => this.no()}><label className='label label-default'>No</label></a> :
                    <a><label className='label label-success'>No</label></a>

    return (
      <tr>
        <td>{this.props.userPreference.preference.name}</td>
        <td>{yesLabel}</td>
        <td>{noLabel}</td>
      </tr>
    )
  }

}
