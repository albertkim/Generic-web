import {Company, ICreateCompany, IUpdateCompany} from '../models/Company'
import {IThunkAction} from './actions'
import {ADD_ERROR} from './errors'
import Endpoints from '../constants/Endpoints'

export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
export type GET_COMPANY_SUCCESS = Company

export function getCompany(companyId: number): IThunkAction<void, void, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.get(Endpoints.GET_COMPANY.replace(':companyId', companyId.toString()))

    request.then((response: any) => {
      dispatch({
        type: GET_COMPANY_SUCCESS,
        payload: new Company(response.data)
      })
    }).catch((error: any) => {
      dispatch({
        type: ADD_ERROR,
        error: error
      })
    })
  }
}

export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS'
export type CREATE_COMPANY_SUCCESS = Company

export const CREATE_COMPANY_ERROR = 'CREATE_COMPANY_ERROR'

export function createCompany(createObject: ICreateCompany, callback: (error?: any, company?: Company) => void): IThunkAction<void, void, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.post(Endpoints.POST_COMPANY, createObject)

    request.then((response: any) => {
      const company = new Company(response.data)
      callback(null, company)
      dispatch({
        type: CREATE_COMPANY_SUCCESS,
        payload: company
      })
    }).catch((error: any) => {
      callback(error)
      dispatch({
        type: ADD_ERROR,
        payload: {
          type: CREATE_COMPANY_ERROR,
          error: error
        }
      })
    })
  }
}

export const UPDATE_COMPANY = 'UPDATE_COMPANY'
export type UPDATE_COMPANY = Company

export function updateCompany(updateObject: IUpdateCompany) {
  const request = Endpoints.Axios.patch(
    Endpoints.UPDATE_COMPANY.replace(':companyId', updateObject.id.toString()),
    updateObject)

  return {
    type: UPDATE_COMPANY,
    payload: request
  }
}
