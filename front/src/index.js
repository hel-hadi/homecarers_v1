import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import BrowserRouter  from 'react-router-dom/BrowserRouter'
import HashRouter  from 'react-router-dom/HashRouter'
import Route  from 'react-router-dom/Route'
import App from './App.jsx'

ReactDOM.render(
  <BrowserRouter>
          <HashRouter>
            <Route component={App} />
          </HashRouter>
  </BrowserRouter>,
  document.getElementById('app')
);
