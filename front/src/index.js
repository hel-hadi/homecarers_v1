import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar } from 'react-responsive-sidebar'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import App from './App.jsx'


ReactDOM.render(
  <BrowserRouter>
          <HashRouter>
            <Route component={App} />
          </HashRouter>
  </BrowserRouter>,
  document.getElementById('app')
);
