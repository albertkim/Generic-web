import * as React from 'react'
import {inject, observer} from 'mobx-react'
import FormError from '../components/FormError'
import {browserHistory} from 'react-router'
import {CurrentUserStore} from '../stores/CurrentUserStore'

interface OwnProps {
  loginError?: string
  registerError?: string
}

interface StoreProps {
  currentUserStore: CurrentUserStore
}

@inject('currentUserStore')
@observer
export class Login extends React.Component<StoreProps, OwnProps> {
  private loginEmailInput: HTMLInputElement
  private loginPasswordInput: HTMLInputElement
  private registerEmailInput: HTMLInputElement
  private registerPasswordInput: HTMLInputElement

  constructor() {
    super()
    this.state = {
      loginError: undefined,
      registerError: undefined
    }
  }

  login() {
    const email = this.loginEmailInput.value
    const password = this.loginPasswordInput.value

    this.props.currentUserStore.login(email, password).then(result => {
      browserHistory.goBack()
    }).catch(error => {
      this.setState({
        loginError: error.response.data.message || 'There as an error logging in',
        registerError: this.state.registerError
      })
    })
  }

  register() {
    const email = this.registerEmailInput.value
    const password = this.registerPasswordInput.value

    this.props.currentUserStore.register(email, password).then(result => {
      browserHistory.goBack()
    }).catch(error => {
      this.setState({
        registerError: error.reponse.data.message || 'There as an error logging in',
        loginError: this.state.loginError
      })
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>

          <div className='col-md-6'>
            <h1>Login</h1>
            <hr />

            <div className='col-md-12'>
              <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' ref={ref => this.loginEmailInput = ref} />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' ref={ref => this.loginPasswordInput = ref} />
              </div>
              <button className='btn btn-default' onClick={this.login.bind(this)}>Submit</button>
              <p><FormError message={this.state.loginError} /></p>
            </div>
          </div>

          <div className='col-md-6'>
            <h1>Register</h1>
            <hr />

            <div className='col-md-12'>
              <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' ref={ref => this.registerEmailInput = ref} />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' ref={ref => this.registerPasswordInput = ref} />
              </div>
              <button className='btn btn-default' onClick={this.register.bind(this)}>Submit</button>
              <p><FormError message={this.state.registerError} /></p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
