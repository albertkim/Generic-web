export class AuthService {

  static isLoggedIn() {
    return window.sessionStorage.token != null
  }

  static getCurrentUser() {
    // TODO: write custom implementation
    return new Promise((resolve, reject) => {
      if (window.sessionStorage.token == null) {
        reject()
      } else {
        resolve({
          email: 'albert275@gmail.com'
        })
      }
    })
  }

  static login(email, password) {
    // TODO: write custom implementation
    return new Promise((resolve, reject) => {
      var token = 'token';
      window.sessionStorage.token = token;
      resolve({
        token: token
      })
    })
  }

  static logout() {
    // TODO: write custom implementation
    return new Promise((resolve, reject) => {
      window.sessionStorage.clear()
      resolve()
    })
  }

  static register(email, password) {
    // TODO: write custom implementation
    return new Promise((resolve, reject) => {
      var token = 'token'
      window.sessionStorage.token = token;
      resolve({
        token: token
      })
    })
  }

}
