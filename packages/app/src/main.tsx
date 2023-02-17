import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider, CssBaseline, PostsProvider, UsersProvider } from "@ahmic/components";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PostsProvider />
        <UsersProvider />

        <ThemeProvider theme={theme}>
          <CssBaseline />

          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
