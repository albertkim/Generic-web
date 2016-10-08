import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {CurrentUserStore} from '../../../stores/CurrentUserStore'
import {IUserPreference} from '../../../models/UserPreference'
import {UserPreferenceRow, IUserPreferenceValueChange} from './UserPreferenceRow'

interface StoreProps {
  currentUserStore?: CurrentUserStore
}

@inject('currentUserStore')
@observer
export class Notifications extends React.Component<StoreProps, void> {

  componentDidMount() {
    this.props.currentUserStore!.getUserPreferences()
  }

  save(change: IUserPreferenceValueChange) {
    this.props.currentUserStore!.updateUserPreference(change).catch(error => {
      console.log(error)
    })
  }

  render() {
    const userPreferences = this.props.currentUserStore!.userPreferences
    if (!userPreferences) {
      return <div>Loading...</div>
    }
    return (
      <table className='table'>
        <tbody>
          {this.props.currentUserStore!.userPreferences!.map(userPreference =>
            <UserPreferenceRow key={userPreference.preference.id} userPreference={userPreference} onDifferentValueClick={this.save.bind(this)} />
          )}
        </tbody>
      </table>
    )
  }

}
