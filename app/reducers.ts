import {handleActions} from 'redux-actions'
import {browserHistory} from 'react-router'
import {ApplicationState} from './models/ApplicationState'
import {Action, LOGIN_USER_SUCCESSFUL,
        FETCH_USER_REQUEST_SUCCESSFUL,
        FETCH_USER_REQUEST_ERROR,
        LOGOUT_USER_REQUEST,
        CONNECT_TO_SERVER_REQUEST} from './actions/actions'

const INITIAL_STATE = {
  isUserLoading: true
} as ApplicationState

export const reducers = handleActions({

  [LOGIN_USER_SUCCESSFUL]: (state = INITIAL_STATE, action: Action<LOGIN_USER_SUCCESSFUL>) => {
    browserHistory.goBack()
    return {
      user: state.user,
      isUserLoading: true,
      isConnectedToServer: state.isConnectedToServer
    } as ApplicationState
  },

  [FETCH_USER_REQUEST_SUCCESSFUL]: (state = INITIAL_STATE, action: Action<FETCH_USER_REQUEST_SUCCESSFUL>) => {
    return {
      user: action.payload.user,
      isUserLoading: false,
      isConnectedToServer: state.isConnectedToServer
    } as ApplicationState
  },

  [FETCH_USER_REQUEST_ERROR]: (state = INITIAL_STATE, action: Action<FETCH_USER_REQUEST_ERROR>) => {
    return {
      isUserLoading: false,
      isConnectedToServer: state.isConnectedToServer
    } as ApplicationState
  },

  [LOGOUT_USER_REQUEST]: (state = INITIAL_STATE, action: Action<LOGOUT_USER_REQUEST>) => {
    browserHistory.push('/')
    return {
      isUserLoading: false,
      isConnectedToServer: state.isConnectedToServer
    } as ApplicationState
  },

  [CONNECT_TO_SERVER_REQUEST]: (state = INITIAL_STATE, action: Action<CONNECT_TO_SERVER_REQUEST>) => {
    return {
      isUserLoading: state.isUserLoading,
      isConnectedToServer: action.payload.connected
    } as ApplicationState
  }

}, INITIAL_STATE)
