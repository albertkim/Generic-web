import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { routes } from './routes'
require('bootstrap-loader')
require('!style!css!sass!./styles/main.scss')

ReactDOM.render((
  <Router history={ browserHistory } routes={ routes } />
  ), document.getElementById('app')
)
