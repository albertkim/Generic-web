import {handleActions} from 'redux-actions'
import {browserHistory} from 'react-router'
import {User} from '../models/User'
import {Action, LOGIN_USER_SUCCESSFUL,
        FETCH_USER_REQUEST_SUCCESSFUL,
        FETCH_USER_REQUEST_ERROR,
        LOGOUT_USER_REQUEST} from '../actions/actions'

export const userReducers = handleActions({
  [LOGIN_USER_SUCCESSFUL]: (state: User, action: Action<LOGIN_USER_SUCCESSFUL>) => {
    browserHistory.goBack()
    return state
  },

  [FETCH_USER_REQUEST_SUCCESSFUL]: (state: User, action: Action<FETCH_USER_REQUEST_SUCCESSFUL>) => {
    return action.payload.user
  },

  [FETCH_USER_REQUEST_ERROR]: (state: User, action: Action<FETCH_USER_REQUEST_ERROR>) => {
    return state
  },

  [LOGOUT_USER_REQUEST]: (state: User, action: Action<LOGOUT_USER_REQUEST>) => {
    browserHistory.push('/')
    return null
  }

}, null)
