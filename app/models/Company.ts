import {User} from './User'

export interface ICompanyUser {
  user: User,
  company: Company,
  role: string
}

export interface ICreateCompany {
  name: string,
  description?: string
}

export class Company {
  public id: number
  public name: string

  constructor(json: any) {
    this.id = json.id
    this.name = json.name
  }
}
