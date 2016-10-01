import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FormError from '../components/FormError'
import {Dispatch, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {login, register, LOGIN_USER_ERROR, REGISTER_USER_ERROR} from '../actions/actions'
import {IError, findError} from '../models/Error'

interface StateProps {
  errors?: IError[]
}

interface DispatchProps {
  login: Function,
  register: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    errors: state.errors
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    login: bindActionCreators(login, dispatch),
    register: bindActionCreators(register, dispatch)
  }
}

class Login extends React.Component<StateProps & DispatchProps, void> {
  login() {
    const email = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['login-email']).value
    const password = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['login-password']).value

    this.props.login(email, password)
  }

  loginErrorComponent() {
    const error = findError(this.props.errors, LOGIN_USER_ERROR)
    const message = error ? (error.message || 'There was an error logging in') : null
    return <FormError message={message} />
  }

  register() {
    const email = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['register-email']).value
    const password = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['register-password']).value

    this.props.register(email, password)
  }

  registerErrorComponent() {
    const error = findError(this.props.errors, REGISTER_USER_ERROR)
    const message = error ? (error.message || 'There was an error registering your account') : null
    return <FormError message={message} />
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <h1>Login</h1>
          <hr />

          <div className='col-md-6'>
            <div className='form-group'>
              <label>Email</label>
              <input type='email' className='form-control' ref='login-email' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='password' className='form-control' ref='login-password' />
            </div>
            <button className='btn btn-default' onClick={this.login.bind(this)}>Submit</button>
            <p>{this.loginErrorComponent()}</p>
          </div>
        </div>

        <div className='row'>
          <h1>Register</h1>
          <hr />

          <div className='col-md-6'>
            <div className='form-group'>
              <label>Email</label>
              <input type='email' className='form-control' ref='register-email' />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='password' className='form-control' ref='register-password' />
            </div>
            <button className='btn btn-default' onClick={this.register.bind(this)}>Submit</button>
            <p>{this.registerErrorComponent()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
