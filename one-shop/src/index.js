import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from './components/headers/headers';
import Footers from './components/footers/futers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Footers />
    <Headers />
  </React.StrictMode>
);
