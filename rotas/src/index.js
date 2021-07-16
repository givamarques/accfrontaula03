import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ToggleProvider } from './context/ToggleProvider';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ToggleProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ToggleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();