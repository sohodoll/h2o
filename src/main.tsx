import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const initialize = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.addEventListener('load', () => {
  if (window.location.pathname === '/') {
    const newURL = `${window.location.origin}/full-employees-database`;
    window.history.replaceState({}, '', newURL);
    initialize();
  }
});

initialize();
