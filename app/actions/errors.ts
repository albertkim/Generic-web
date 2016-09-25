import {IAction} from './actions'
import {IError} from '../models/Error'

export const ADD_ERROR = 'ADD_ERROR'
export type ADD_ERROR = IError

export const REMOVE_ERROR = 'REMOVE_ERROR'
export type REMOVE_ERROR = {type: string}

export const REMOVE_ALL_ERRORS = 'REMOVE_ALL_ERRORS'
export type REMOVE_ALL_ERRORS = {}

export function addError(error: IError): IAction<ADD_ERROR> {
  return {
    type: ADD_ERROR,
    payload: error
  }
}

export function removeError(type: string): IAction<REMOVE_ERROR> {
  return {
    type: ADD_ERROR,
    payload: {
      type: type
    }
  }
}

export function removeAllErrors(type: string): IAction<REMOVE_ALL_ERRORS> {
  return {
    type: REMOVE_ALL_ERRORS,
    payload: {}
  }
}
