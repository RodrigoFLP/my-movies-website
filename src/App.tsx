import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
