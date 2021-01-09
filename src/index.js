import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SoundProvider from './Context/SoundContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SoundProvider>
        <App />
      </SoundProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
