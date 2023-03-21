import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/general.css'
import { BrowserRouter } from 'react-router-dom'

const appElement = document.getElementById('app')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  appElement,
)
