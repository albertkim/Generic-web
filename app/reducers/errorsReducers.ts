import {handleActions} from 'redux-actions'
import {IAction} from '../actions/actions'
import {ADD_ERROR, REMOVE_ALL_ERRORS} from '../actions/errors'
import {LOCATION_CHANGE} from 'react-router-redux'
import {IError} from '../models/Error'

export const errorsReducer = handleActions({
  [ADD_ERROR]: (state: IError[], action: IAction<ADD_ERROR>) => {
    // If a previous error exists with the same type, override it
    const stateWithoutNewType = state.filter(error => error.type !== action.payload.type)
    return [...stateWithoutNewType, action.payload]
  },
  [LOCATION_CHANGE]: (state: IError[], action: IAction<any>) => {
    return []
  },
  [REMOVE_ALL_ERRORS]: (state: IError[], action: IAction<REMOVE_ALL_ERRORS>) => {
    return []
  }
}, [])
