import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwind from "tailwindcss";

export default defineConfig({
  clearScreen: false,
  envPrefix: "APP_",
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
    cors: {
      origin: "http://localhost:5000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  },
  plugins: [react()],
});
