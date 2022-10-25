import React from 'react';
import ReactDOM from 'react-dom/client';
//Added Below 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
//Added Below
import Movies from './Components/Movies';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Added Below 
<Movies/>
);

reportWebVitals();
