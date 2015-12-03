import React from 'react';
import { Link } from 'react-router';
import { AuthService } from '../../services/AuthService';

export class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null
    }
  }

  componentDidMount() {
    AuthService.getCurrentUser().then(user => {
      this.setState({
        email: user.email
      })
    }).catch(() => {
      this.setState({});
    });
  }

  logout() {
    AuthService.logout().then(() => {
      window.location.href = '/';
    });
  }

  render() {
    var profileSection;
    if (AuthService.isLoggedIn()) {
      profileSection = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/profile">{ this.state.email }</Link></li>
          <li><a href="" onClick={ this.logout }>Logout</a></li>
        </ul>
      );
    } else {
      profileSection = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      );
    }

    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Generic-web</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            { profileSection }
          </div>
        </div>
      </nav>
    );
  }

}
