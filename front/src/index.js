import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Sidebar } from 'react-responsive-sidebar'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import decode from 'jwt-decode'
import rootReducer from './rootReducer.jsx'
import App from './App.jsx'
import {userLoggedIn} from './actions/auth.jsx'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

if (localStorage.homecareJWT) {
    const payload = decode(localStorage.homecareJWT);
    const user =  {
        token: localStorage.homecareJWT,
        email: payload.email,
        confirmed: payload.confirmed
    };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <HashRouter>
            <Route component={App} />
          </HashRouter>
      </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
