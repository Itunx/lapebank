import React from 'react';
import ReactDOM from 'react-dom/client';
import  './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import Content from'./Content'
import Features from'./Features'
import Services  from './Services';
import Footer from'./Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Content/>
    <Features/>
    <Services />
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
