import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from "./routes/Routes";
import AuthProvider from "./Context/AuthContext/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);

