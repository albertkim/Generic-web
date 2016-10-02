import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ApplicationState} from '../../../models/ApplicationState'
import {IUserPreference} from '../../../models/UserPreference'
import {fetchUserPreferences, updateUserPreference} from '../../../actions/userPreference'
import {UserPreferenceRow, IUserPreferenceValueChange} from './UserPreferenceRow'

interface StateProps {
  userPreferences: IUserPreference[]
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    userPreferences: state.userPreferences
  }
}

interface DispatchProps {
  fetchUserPreferences: Function,
  updateUserPreference: Function
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    fetchUserPreferences: bindActionCreators(fetchUserPreferences, dispatch),
    updateUserPreference: bindActionCreators(updateUserPreference, dispatch)
  }
}

class Notifications extends React.Component<StateProps & DispatchProps, void> {

  componentDidMount() {
    this.props.fetchUserPreferences()
  }

  save(change: IUserPreferenceValueChange) {
    this.props.updateUserPreference(change, (error: any) => {
      if (error) {
        console.log(error)
      } else {
        this.props.fetchUserPreferences()
      }
    })
  }

  render() {
    return (
      <table className='table'>
        <tbody>
          {this.props.userPreferences.map(userPreference =>
            <UserPreferenceRow key={userPreference.preference.id} userPreference={userPreference} onDifferentValueClick={this.save.bind(this)} />
          )}
        </tbody>
      </table>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
