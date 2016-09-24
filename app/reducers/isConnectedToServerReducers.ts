import {handleActions} from 'redux-actions'
import {Action, CONNECT_TO_SERVER_REQUEST} from '../actions/actions'

export const isConnectedToServerReducers = handleActions({
  [CONNECT_TO_SERVER_REQUEST]: (state: boolean, action: Action<CONNECT_TO_SERVER_REQUEST>) => {
    return action.payload.connected
  }
}, null)
