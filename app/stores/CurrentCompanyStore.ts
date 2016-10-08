import {observable} from 'mobx'
import {Company} from '../models/Company'
import Endpoints from '../constants/Endpoints'

export class CurrentCompanyStore {
  @observable company: Company

  getById(companyId: number) {
    const url = Endpoints.GET_COMPANY.replace(':companyId', companyId.toString())
    return Endpoints.Axios.get(url).then(response => {
      const company = new Company(response.data)
      this.company = company
      return company
    })
  }

  create(createObject: any) {
    return Endpoints.Axios.post(Endpoints.POST_COMPANY, createObject).then(response => {
      const company = new Company(response.data)
      this.company = company
      return company
    })
  }
}
