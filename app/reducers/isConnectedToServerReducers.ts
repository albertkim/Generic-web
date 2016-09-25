import {handleActions} from 'redux-actions'
import {IAction, CONNECT_TO_SERVER_REQUEST} from '../actions/actions'

export const isConnectedToServerReducers = handleActions({
  [CONNECT_TO_SERVER_REQUEST]: (state: boolean, action: IAction<CONNECT_TO_SERVER_REQUEST>) => {
    return action.payload.connected
  }
}, null)
