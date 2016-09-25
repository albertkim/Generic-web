import {handleActions} from 'redux-actions'
import {User} from '../models/User'
import {IAction, LOGIN_USER_SUCCESSFUL,
        FETCH_USER_REQUEST_SUCCESSFUL,
        FETCH_USER_REQUEST_ERROR,
        LOGOUT_USER_REQUEST} from '../actions/actions'

export const userReducers = handleActions({
  [LOGIN_USER_SUCCESSFUL]: (state: User, action: IAction<LOGIN_USER_SUCCESSFUL>) => {
    return state
  },

  [FETCH_USER_REQUEST_SUCCESSFUL]: (state: User, action: IAction<FETCH_USER_REQUEST_SUCCESSFUL>) => {
    return action.payload.user
  },

  [FETCH_USER_REQUEST_ERROR]: (state: User, action: IAction<FETCH_USER_REQUEST_ERROR>) => {
    return state
  },

  [LOGOUT_USER_REQUEST]: (state: User, action: IAction<LOGOUT_USER_REQUEST>) => {
    return null
  }

}, null)
