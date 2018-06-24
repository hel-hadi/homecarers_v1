import React from 'react'
import ReactDOM from 'react-dom'
import { hydrate } from 'react-dom'
import BrowserRouter  from 'react-router-dom/BrowserRouter'
import { Provider }  from 'react-redux/dist/react-redux.min'
import { createStore, applyMiddleware } from 'redux'
import 'semantic-ui-css/semantic.min.css'
import thunk from 'redux-thunk/dist/redux-thunk.min'
import Route  from 'react-router-dom/Route'
import {App } from './actions/routeSplit'
import rootReducer from "./rootReducer";
import '@css/homepage.css'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

hydrate(
  <BrowserRouter>
              <Provider store={store}>
                <Route component ={App} />
              </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);


