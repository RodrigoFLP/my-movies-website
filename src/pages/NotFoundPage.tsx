import { useNavigate } from "react-router-dom";
import { Button } from "../components/Buttons/Button";
import styles from "../styles/NotFoundPage.module.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <h4>The page you are looking for was not found</h4>
      <Button onClick={() => navigate("")}>Return home</Button>
    </div>
  );
};

export default NotFoundPage;
