import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
   <BrowserRouter>
          <App />
   </BrowserRouter>  
,
  document.getElementById('root')
);

reportWebVitals();
