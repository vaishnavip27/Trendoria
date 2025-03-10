import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif"],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets"
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true
  }
});
