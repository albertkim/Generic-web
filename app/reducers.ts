import {handleActions} from 'redux-actions'
import {ApplicationState} from './models/ApplicationState'
import {User} from './models/User'
import {Action, LOGIN_USER_SUCCESSFUL, FETCH_USER_REQUEST_SUCCESSFUL, LOGOUT_USER_REQUEST} from './actions'

const INITIAL_STATE: ApplicationState = {}

export const reducers = handleActions({

  LOGIN_USER_SUCCESSFUL: (state = INITIAL_STATE, action: Action<LOGIN_USER_SUCCESSFUL>) => {
    return {
      user: action.payload.user
    }
  },

  FETCH_USER_REQUEST: (state = INITIAL_STATE, action: Action<FETCH_USER_REQUEST_SUCCESSFUL>) => {
    return {
      user: action.payload.user
    }
  },

  LOGOUT_USER_REQUEST: (state = INITIAL_STATE, action: Action<LOGOUT_USER_REQUEST>) => {
    return {}
  }

}, INITIAL_STATE)
