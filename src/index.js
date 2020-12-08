//import statements
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";
import 'dont-sniff-mimetype';

import App from './App';
///fixes owasp alerts
const nosniff = require('dont-sniff-mimetype');
nosniff();
//controls the contents of CookiesProvider and App
ReactDOM.render(
    
    <CookiesProvider> 
    <App />
    </CookiesProvider>,
    document.getElementById('root')
);

