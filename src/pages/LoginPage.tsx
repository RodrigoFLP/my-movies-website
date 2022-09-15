import LoginCard from "../components/LoginCard";
import styles from "../styles/LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginCard />
    </div>
  );
};

export default LoginPage;
