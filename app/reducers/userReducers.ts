import {handleActions} from 'redux-actions'
import {User} from '../models/User'
import {IAction,
        LOGIN_USER_RESPONSE,
        FETCH_USER_RESPONSE,
        LOGOUT_USER_REQUEST} from '../actions/actions'

export const userReducers = handleActions({
  [LOGIN_USER_RESPONSE]: (state: User, action: IAction<LOGIN_USER_RESPONSE>) => {
    const authToken = action.payload.authToken
    window.localStorage.setItem('authToken', authToken)
    return action.payload.user
  },

  [FETCH_USER_RESPONSE]: (state: User, action: IAction<FETCH_USER_RESPONSE>) => {
    return action.payload
  },

  [LOGOUT_USER_REQUEST]: (state: User, action: IAction<LOGOUT_USER_REQUEST>) => {
    return null
  }

}, null)
