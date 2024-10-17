// src/index.js o src/App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Tailwind & Flowbite CSS
import App from './App';
import './i18n'; // Importa la configuración de i18n

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
