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
    // Transpile for Safari compatibility to reduce TDZ edge cases in circular module graphs.
    target: "safari14",
    // Helps map Safari stack traces back to source while validating the fix.
    sourcemap: true,
    // Safari can throw TDZ errors in minified ArcGIS bundles.
    // Keep default chunking, but avoid minification transforms.
    minify: false,
    // Avoid Safari modulepreload ordering quirks with large ESM dependency graphs.
    modulePreload: false,
  },
});
