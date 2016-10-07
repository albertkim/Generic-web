import * as React from 'react'
import FormError from '../components/FormError'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {IAction, login, register} from '../actions/actions'

interface OwnProps {
  loginError: string
  registerError: string
}

interface DispatchProps {
  login: (email: string, password: string) => Promise<IAction<any>>
  register: (email: string, password: string) => Promise<IAction<any>>
}

class Login extends React.Component<DispatchProps, OwnProps> {
  private loginEmailInput: HTMLInputElement
  private loginPasswordInput: HTMLInputElement
  private registerEmailInput: HTMLInputElement
  private registerPasswordInput: HTMLInputElement

  constructor() {
    super()
    this.state = {
      loginError: null,
      registerError: null
    }
  }

  login() {
    const email = this.loginEmailInput.value
    const password = this.loginPasswordInput.value

    this.props.login(email, password).then(result => {
      if (result.error) {
        this.setState({
          loginError: result.payload || 'There as an error logging in',
          registerError: this.state.registerError
        })
      } else {
        browserHistory.goBack()
      }
    })
  }

  register() {
    const email = this.registerEmailInput.value
    const password = this.registerPasswordInput.value

    this.props.register(email, password).then(result => {
      if (result.error) {
        this.setState({
          registerError: result.payload || 'There as an error logging in',
          loginError: this.state.loginError
        })
      } else {
        browserHistory.goBack()
      }
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

export default connect(null, {login, register})(Login)
