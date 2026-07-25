import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/theme.css";
import ThemeProvider from "./context/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { CMSProvider } from "./context/CMSContext";
import { NotificationProvider } from "./context/NotificationContext";
import { SettingsProvider } from "./context/SettingsContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <GoogleOAuthProvider
    clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
  >
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <SettingsProvider>
            <CMSProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </CMSProvider>
          </SettingsProvider>
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
</React.StrictMode>
);