/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import "./styles/styles.scss";
//import '../semantic/dist/semantic.min.css';
require("./favicon.ico"); // Tell webpack to load favicon.ico
import Routes from './Routes';


render(
  <AppContainer>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./Routes", () => {
    render(
      <AppContainer>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
