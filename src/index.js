import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';

import { BrowserRouter } from 'react-router-dom'

const muiTheme = createMuiTheme();
ReactDOM.render(
  <MuiThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>, 
document.getElementById('root'));

