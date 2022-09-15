import { useEffect, useRef, useState } from "react";

export const useNearScreen = ({ persistent = false } = {}) => {
  const elementRef = useRef<any | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : require("intersection-observer")
    ).then(() => {
      const onChange = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const el = entries[0];
        console.log(el.isIntersecting);
        if (persistent) {
          setVisible(el.isIntersecting);
          observer.disconnect();
        } else if (el.isIntersecting === true) {
          setVisible(true);
          observer.disconnect();
        }
      };

      const observer = new window.IntersectionObserver(onChange, {
        rootMargin: "0px",
        // trackVisibility: true,
        // delay: 100,
      });
      observer.observe(elementRef.current);
    });
  }, [[elementRef]]);

  return { elementRef, visible };
};
