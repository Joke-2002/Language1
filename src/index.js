import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'
import './i18n'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-lanquagedetector';


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loding...</div>}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
