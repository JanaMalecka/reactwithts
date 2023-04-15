import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(<App />);

/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
