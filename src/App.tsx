import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage";
import HomePage from "./pages/HomePage";

import { Provider } from "react-redux";
import { store } from "./store/store";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
