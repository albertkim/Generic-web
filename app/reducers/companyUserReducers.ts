import {handleActions} from 'redux-actions'
import {IAction} from '../actions/actions'
import {GET_MY_COMPANIES_SUCCESS} from '../actions/user'
import {ICompanyUser} from '../models/Company'

export const companyUserReducer = handleActions({
  [GET_MY_COMPANIES_SUCCESS]: (state: ICompanyUser[], action: IAction<GET_MY_COMPANIES_SUCCESS>) => {
    return action.payload
  }
}, [])
