import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/cartSlice';
import { GET_TOTALS } from './redux/cartSlice';

const store = configureStore({
	reducer: {
    cart: cartReducer
  }
})

store.dispatch(GET_TOTALS)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
