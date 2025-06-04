import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import '../public/styles/reset.css';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
