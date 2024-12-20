import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import store from "@store/store";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset-bootstrap.css";
import "./styles/index.css";
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <AppRouter />
    </Provider>
  </StrictMode>
);
