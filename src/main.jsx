import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ui/ErrorFallback.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </React.StrictMode>
);
