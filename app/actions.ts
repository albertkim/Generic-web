import {Dispatch} from 'redux'
import {User} from './models/User'

export interface Action<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R

export const LOGIN_USER_SUCCESSFUL = 'LOGIN_USER_SUCCESSFUL'
export type LOGIN_USER_SUCCESSFUL = {user: User, authToken: string}
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export type LOGIN_USER_ERROR = {}
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export type FETCH_USER_REQUEST = {}
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

// Helpful tutorial on dispatching thunks
// http://blog.nojaf.com/2015/12/06/redux-thunk/

export function login(email: string, password: string) : ThunkAction<void, void, void> {
  return (dispatch, getState, extraArg) => {
    const request = new Promise<any>((resolve, reject) => {
      resolve({
        user: {
          email: email
        },
        authToken: '12345'
      })
    })

    request.then((data: any) => {
      dispatch({
        type: LOGIN_USER_SUCCESSFUL,
        payload: {
          user: data.user,
          authToken: data.authToken
        }
      })
    }).catch((error: any) => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          error: error
        }
      })
    })
  }
}


export function fetchCurrentUser() : Action<FETCH_USER_REQUEST> {
  return {
    type: FETCH_USER_REQUEST,
    payload: {}
  }
}

export function logout() : Action<LOGOUT_USER_REQUEST> {
  return {
    type: LOGOUT_USER_REQUEST,
    payload: {}
  }
}
