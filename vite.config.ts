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
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
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
