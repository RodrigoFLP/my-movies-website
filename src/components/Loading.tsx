import styles from "../styles/Loading.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { FC } from "react";

interface LoadingProps {
  height?: "auto" | "full";
}

export const Loading: FC<LoadingProps> = ({ height = "full" }) => {
  return (
    <div className={`${styles.container} ${styles[height]}`}>
      <Player
        autoplay
        loop
        speed={2}
        src="/loader.json"
        style={{ height: "200px", width: "200px" }}
      ></Player>
    </div>
  );
};

export default Loading;
