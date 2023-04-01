import React              from 'react';
import ReactDOM           from 'react-dom/client';
import './index.css';
import App                from './App';
import {BrowserRouter}    from "react-router-dom";
import reportWebVitals    from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import userReducer        from './reducers/userSlice';
import { Provider }       from 'react-redux';
import {AuthProvider}  from './contexts/AuthContext.js';
import logger from 'redux-logger'


const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState:{},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
