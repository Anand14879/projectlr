import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
);