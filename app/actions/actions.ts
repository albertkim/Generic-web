import {Dispatch} from 'redux'
import {browserHistory} from 'react-router'
import {User} from '../models/User'
import Endpoints from '../constants/Endpoints'

export interface IAction<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

export type IThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R

export type IPromiseAction<T> = {
  type: string
  payload: Promise<T>
}

export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE'
export type LOGIN_USER_RESPONSE = {user: User, authToken: string}

export const REGISTER_USER_RESPONSE = 'REGISTER_USER_RESPONSE'
export type REGISTER_USER_RESPONSE = {user: User, authToken: string}

export const FETCH_USER_RESPONSE = 'FETCH_USER_RESPONSE'
export type FETCH_USER_RESPONSE = User

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

export const CONNECT_TO_SERVER_REQUEST = 'CONNECT_TO_SERVER_REQUEST'
export type CONNECT_TO_SERVER_REQUEST = {connected: boolean}

// Helpful tutorial on dispatching thunks
// http://blog.nojaf.com/2015/12/06/redux-thunk/

export function fetchCurrentUser(): IPromiseAction<FETCH_USER_RESPONSE> {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.get(Endpoints.GET_ME).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error.response.data.message || 'There was an error fetching your profile')
    })
  })

  return {
    type: FETCH_USER_RESPONSE,
    payload: request
  }
}

export function login(email: string, password: string): IPromiseAction<LOGIN_USER_RESPONSE> {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.post(Endpoints.POST_LOGIN_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error.response.data.message || 'There was an error logging in')
    })
  })

  return {
    type: LOGIN_USER_RESPONSE,
    payload: request
  }
}

export function register(email: string, password: string): IPromiseAction<REGISTER_USER_RESPONSE> {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.post(Endpoints.POST_REGISTER_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error.response.data.message || 'There was an error registering your account')
    })
  })

  return {
    type: REGISTER_USER_RESPONSE,
    payload: request
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
    const request = Endpoints.Axios.get(Endpoints.GET_PING)

    request.then((response: any) => {
      dispatch({
        type: CONNECT_TO_SERVER_REQUEST,
        payload: {
          connected: true
        }
      })
    }).catch((error: any) => {
      dispatch({
        type: CONNECT_TO_SERVER_REQUEST,
        payload: {
          connected: false
        }
      })
    })
  }
}
