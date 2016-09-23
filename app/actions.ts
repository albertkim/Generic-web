import {Dispatch} from 'redux'
import {User} from './models/User'

export interface Action<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export type LOGIN_USER_REQUEST = {user: User, authToken: string}
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export type LOGIN_USER_ERROR = {}
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export type FETCH_USER_REQUEST = {}
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

export const login : ThunkAction<void, void, {email: string, password: string}> =
  (dispatch, getState, extraArg) => {
    console.log(dispatch, getState, extraArg)

    const request = new Promise<any>((resolve, reject) => {
      const email = extraArg.email
      const password = extraArg.password
      resolve({
        user: {
          email: email
        },
        authToken: '12345'
      })
    })

    request.then((data: any) => {
      dispatch({
        type: LOGIN_USER_REQUEST,
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
