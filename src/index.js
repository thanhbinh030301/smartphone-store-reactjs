import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simple-datatables/dist/style.css'
import App from './App';
import { Provider } from 'react-redux'
import  store  from './redux/store'
import { createRoot } from 'react-dom/client';
import 'rsuite/styles/index.less';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <Provider store={store}>
      <App />
  </Provider>,
);