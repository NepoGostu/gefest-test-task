import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/general.css'
import { HashRouter } from 'react-router-dom'

const appElement = document.getElementById('app')

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  appElement,
)
