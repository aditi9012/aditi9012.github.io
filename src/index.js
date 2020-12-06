import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';


const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "white"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "lightgrey"
    },
    text: {
      primary: "#234F1F"
    }
  }
});

const Appi = () => {
  const [light, setLight] = React.useState(true);
  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>
    </MuiThemeProvider>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <Appi/>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
