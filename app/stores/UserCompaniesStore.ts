import {observable} from 'mobx'
import {ICompanyUser} from '../models/Company'
import Endpoints from '../constants/Endpoints'

export class UserCompaniesStore {
  @observable myCompanies: ICompanyUser[] = []

  getMyCompanies() {
    return Endpoints.Axios.get(Endpoints.GET_MY_COMPANIES).then(response => {
      this.myCompanies = response.data
    })
  }
}
