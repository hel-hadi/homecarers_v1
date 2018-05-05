import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter  from 'react-router-dom/BrowserRouter'
import { Provider }  from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'semantic-ui-css/semantic.min.css'
import thunk from 'redux-thunk/dist/redux-thunk.min'
import HashRouter  from 'react-router-dom/HashRouter'
import Route  from 'react-router-dom/Route'
import App from './App.jsx'
import rootReducer from "./rootReducer";
import '@css/homepage.css'
import '@css/loading.css'
import '@css/styles.css'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <BrowserRouter>
          <HashRouter>
              <Provider store={store}>
                <Route component={App} />
              </Provider>
          </HashRouter>
  </BrowserRouter>,
  document.getElementById('app')
);


