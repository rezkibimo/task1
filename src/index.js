import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav className='navbar bg-light shadow'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>University List</span>
      </div>
    </nav>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
