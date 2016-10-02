import {handleActions} from 'redux-actions'
import {IUserPreference} from '../models/UserPreference'
import {IAction} from '../actions/actions'
import {FETCH_USER_PREFERENCE_SUCCESS} from '../actions/userPreference'

export const userPreferenceReducers = handleActions({
  [FETCH_USER_PREFERENCE_SUCCESS]: (state: IUserPreference[], action: IAction<FETCH_USER_PREFERENCE_SUCCESS>) => {
    return action.payload.userPreferences
  }
}, [])
