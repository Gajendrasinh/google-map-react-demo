import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

// Required for Redux store setup
import { Provider } from 'react-redux';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <App />
      <Footer sx={{ pt: 4 }} ></Footer>
    </Provider>
  </React.StrictMode>
);