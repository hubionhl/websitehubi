import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../static-build"),
    emptyOutDir: true,
  },
});