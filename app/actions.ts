export interface IAction {
  type: string
  payload: any
  error?: boolean
  meta?: any
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export type FETCH_USER_REQUEST = {id: number}

export function fetchUser(userId: number): IAction {
  return {
    type: FETCH_USER_REQUEST,
    payload: {
      id: userId
    }
  }
}
