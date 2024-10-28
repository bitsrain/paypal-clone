import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/application.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> {/* causing unpredictable unmounts/mounts repetitions */}
  <App />
  // </React.StrictMode>
);
