import {observable} from 'mobx'
import {User} from '../models/User'
import Endpoints from '../constants/Endpoints'

export class CurrentUserStore {
  @observable currentUser?: User

  getCurrentUser() {
    return Endpoints.Axios.get(Endpoints.GET_ME).then(response => {
      this.currentUser = response.data
    })
  }

  login(email: string, password: string) {
    return Endpoints.Axios.post(Endpoints.POST_LOGIN_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      this.currentUser = response.data.user
      window.localStorage.setItem('authToken', response.data.authToken)
    })
  }

  register(email: string, password: string) {
    return Endpoints.Axios.post(Endpoints.POST_REGISTER_EMAIL, {
      email: email,
      password: password
    }).then(response => {
      this.currentUser = response.data.user
      window.localStorage.setItem('authToken', response.data.authToken)
    })
  }

  logout() {
    window.localStorage.removeItem('authToken')
  }
}
