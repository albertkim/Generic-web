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

export interface IUpdateCompany {
  id: number,
  name: string,
  description?: string
}

export class Company {
  public id: number
  public name: string
  public description: string
  public isCompanyVerified: boolean

  constructor(json: any) {
    this.id = json.id
    this.name = json.name
    this.description = json.description
    this.isCompanyVerified = json.isCompanyVerified
  }
}
