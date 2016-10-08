import {observable} from 'mobx'
import {User} from '../models/User'
import {IUserPreference, IUpdateUserPreference} from '../models/UserPreference'
import Endpoints from '../constants/Endpoints'

export class CurrentUserStore {
  @observable currentUser?: User
  @observable userPreferences?: IUserPreference[]

  getCurrentUser() {
    return Endpoints.Axios.get(Endpoints.GET_ME).then(response => {
      this.currentUser = response.data
    })
  }

  getUserPreferences() {
    return Endpoints.Axios.get(Endpoints.GET_USER_PREFERENCES).then(response => {
      const userPreferences = response.data.userPreferences as IUserPreference[]
      this.userPreferences = userPreferences
      return userPreferences 
    })
  }

  login(email: string, password: string) {
    return Endpoints.Axios.post(Endpoints.POST_LOGIN_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      const user = response.data.user as User
      const authToken = response.data.authToken as string
      this.currentUser = user
      window.localStorage.setItem('authToken', authToken)
      return user
    })
  }

  register(email: string, password: string) {
    return Endpoints.Axios.post(Endpoints.POST_REGISTER_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      const user = response.data.user as User
      const authToken = response.data.authToken as string
      this.currentUser = user
      window.localStorage.setItem('authToken', authToken)
      return user
    })
  }

  updateUser(updateObject: any) {
    return Endpoints.Axios.patch(Endpoints.PATCH_ME, updateObject).then(response => {
      const updatedUser = response.data as User
      this.currentUser = updatedUser
      return updatedUser
    })
  }

  updateUserPreference(updateObject: IUpdateUserPreference) {
    return Endpoints.Axios.patch(Endpoints.PATCH_USER_PREFERENCES, updateObject).then(() => {
      this.getUserPreferences()
    })
  }

  logout() {
    window.localStorage.removeItem('authToken')
  }
}
