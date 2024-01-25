// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppContext from './AppContext.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import LoginReducerFile from './Reducers.jsx/LoginReducer.file'

const store =  configureStore({
  reducer:{
    loginoperation:LoginReducerFile,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>

  </Provider>
  <AppContext>
 <App />
  </AppContext>

  </BrowserRouter>,
)
