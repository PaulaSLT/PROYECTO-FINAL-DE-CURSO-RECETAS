import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

import ContextWrapper from "./context/ContextWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextWrapper>
        <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
);
