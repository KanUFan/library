//third-party
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//store
import store from "@app/store";
import "@app/firebase";

//app
import "@app/index.css";
import App from "@app/App";
import ErrorPage from "@views/Errors/error-page";

//metrics
import reportWebVitals from "@app/reportWebVitals";


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
