import { Navigate, Outlet } from "react-router-dom";
import {
  selectIsIdle,
  selectIsLoading,
  selectIsLoggedIn,
} from "./store/slices/authSlice";
import { useAppSelector } from "./store/hooks";

const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isIdle = useAppSelector(selectIsIdle);
  const isLoading = useAppSelector(selectIsLoading);

  if (isIdle || isLoading) {
    return <div>loading</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
