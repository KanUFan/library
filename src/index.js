import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";
import "./firebase";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root-body")).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);

reportWebVitals(console.log);
