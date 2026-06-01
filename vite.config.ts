import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Project site path for GitHub Pages: https://<user>.github.io/mountain-lion-habitat-analysis-js/
  base: "/mountain-lion-habitat-analysis-js/",
  plugins: [],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
