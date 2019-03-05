// For IE 11 support
import 'react-app-polyfill/ie11';
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle';

// Import Framework7-React plugin
import Framework7React from 'framework7-react';

// Import main App component
//import App from './components/App.jsx';
import AppTest1 from './components/AppTest1.js';

// Framework7 styles
import 'framework7/css/framework7.bundle.css';

// Icons
import './css/icons.css';

// Custom app styles
import './css/app.css';

// Init Framework7-React plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  <AppTest1 />,
  document.getElementById('app'),
);
