import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import "./index.css";
import { store } from './app/store';
// import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-s1bcfe4tz1wwlu2h.us.auth0.com"
      clientId="uXaWVnDDUjdLU8ziq0Rn9eC0Np90rgD1"
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/'
      }}
    >
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
);
