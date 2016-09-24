import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {Dispatch, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ApplicationState} from '../models/ApplicationState'
import {AuthService} from '../services/AuthService'
import {Action, login, LOGIN_USER_SUCCESSFUL} from '../actions'

interface StateProps {}

interface DispatchProps {
  login: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

class Login extends React.Component<StateProps & DispatchProps, void> {
  login() {
    const email = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['login-email']).value
    const password = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['login-password']).value

    this.props.login(email, password)
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
            <button className='btn btn-default' onClick={this.login.bind(this)}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
