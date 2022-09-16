/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

type ViteConfigInput = {
  mode: string;
  command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === "production" ? "[hash:base64:2]" : "[local]_[hash:base64:2]";

  return defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      deps: {
        inline: ["vitest-canvas-mock"],
      },
      css: true,
    },

    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName,
      },
    },
  });
};
