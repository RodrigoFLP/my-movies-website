import { FC, useState } from "react";

import styles from "../styles/Image.module.css";

interface ImageProps {
  thumb: string;
  src: string;
  alt?: string;
  className?: string;
}

export const Image: FC<ImageProps> = ({ thumb, src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className={`${className} ${styles.thumb} ${
          isLoaded && styles["thumb-animation"]
        } `}
        alt={alt}
        src={thumb}
        // style={{ display: isLoaded ? "none" : "block" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`${className} ${styles.full}`}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </>
  );
};
export default Image;
