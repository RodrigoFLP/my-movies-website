import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import ProtectedRoute from "./ProtectedRoute";
import Layout from "./components/Layouts/Layout";

import {
  DetailsPage,
  FavoritesPage,
  SearchPage,
  NotFoundPage,
  HomePage,
} from "./pages";
import { Loading } from "./components";

const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
