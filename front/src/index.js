import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar } from 'react-responsive-sidebar'
import MenuMobile from '@temp/MenuMobile.jsx'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.render(
  <BrowserRouter>
      <Route component={App} />
  </BrowserRouter>,
  document.getElementById('app')
)
