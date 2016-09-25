import {Dispatch} from 'redux'
import {browserHistory} from 'react-router'
import {User} from '../models/User'
import Endpoints from '../constants/Endpoints'
import {addError} from './errors'

export interface IAction<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

export type IThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R

export const LOGIN_USER_SUCCESSFUL = 'LOGIN_USER_SUCCESSFUL'
export type LOGIN_USER_SUCCESSFUL = {user: User, authToken: string}

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export type LOGIN_USER_ERROR = {error: any}

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'
export type REGISTER_USER_ERROR = {error: any}

export const FETCH_USER_REQUEST_SUCCESSFUL = 'FETCH_USER_REQUEST_SUCCESSFUL'
export type FETCH_USER_REQUEST_SUCCESSFUL = {user: User}

export const FETCH_USER_REQUEST_ERROR = 'FETCH_USER_REQUEST_ERROR'
export type FETCH_USER_REQUEST_ERROR = {}

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

export const CONNECT_TO_SERVER_REQUEST = 'CONNECT_TO_SERVER_REQUEST'
export type CONNECT_TO_SERVER_REQUEST = {connected: boolean}

// Helpful tutorial on dispatching thunks
// http://blog.nojaf.com/2015/12/06/redux-thunk/

export function fetchCurrentUser(): IAction<FETCH_USER_REQUEST_SUCCESSFUL | FETCH_USER_REQUEST_ERROR> {
  if (window.localStorage.getItem('authToken') != null) {
    return {
      type: FETCH_USER_REQUEST_SUCCESSFUL,
      payload: {
        user: {
          email: 'test@test.com',
          isEmailVerified: false
        }
      }
    }
  } else {
    return {
      type: FETCH_USER_REQUEST_ERROR,
      payload: {}
    }
  }
}

export function login(email: string, password: string):
  IThunkAction<void, LOGIN_USER_SUCCESSFUL | LOGIN_USER_ERROR, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.post(Endpoints.POST_LOGIN_EMAIL, {
      email: email,
      password: password
    })

    request.then((response: any) => {
      window.localStorage.setItem('authToken', response.data.authToken)
      dispatch(fetchCurrentUser())
      browserHistory.goBack()
      dispatch({
        type: LOGIN_USER_SUCCESSFUL,
        payload: {
          user: response.data.user,
          authToken: response.data.authToken
        }
      })
    }).catch((error: any) => {
      dispatch(addError({
        type: LOGIN_USER_ERROR,
        message: error.response.data.message || `There was an error logging in`,
        error: error
      }))
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {
          error: error
        }
      })
    })
  }
}

export function register(email: string, password: string):
  IThunkAction<void, REGISTER_USER_ERROR, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.post(Endpoints.POST_REGISTER_EMAIL, {
      email: email,
      password: password
    })

    request.then((response: any) => {
      window.localStorage.setItem('authToken', response.data.authToken)
      dispatch(fetchCurrentUser())
      browserHistory.goBack()
    }).catch((error: any) => {
      dispatch(addError({
        type: REGISTER_USER_ERROR,
        message: error.response.data.message || `There was an error logging in`,
        error: error
      }))
    })
  }
}


export function logout(): IAction<LOGOUT_USER_REQUEST> {
  window.localStorage.clear()
  browserHistory.push('/')
  return {
    type: LOGOUT_USER_REQUEST,
    payload: {}
  }
}

export function connectToServer(): IThunkAction<void, CONNECT_TO_SERVER_REQUEST, void> {
  return (dispatch, getState, extraArg) => {
    Endpoints.Axios.get(Endpoints.GET_PING).then(response => {
      dispatch({
        type: CONNECT_TO_SERVER_REQUEST,
        payload: {
          connected: true
        }
      })
    }).catch(error => {
      dispatch({
        type: CONNECT_TO_SERVER_REQUEST,
        payload: {
          connected: false
        }
      })
    })
  }
}
