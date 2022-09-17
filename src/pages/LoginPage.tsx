import { Login } from "../components";
import styles from "../styles/LoginPage.module.css";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectIsLoggedIn } from "../store/slices/authSlice";

export const LoginPage = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default LoginPage;
