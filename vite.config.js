import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.jpeg", "**/*.jpg", "**/*.PNG", "**/*.JPG", "**/*.gif"],
  build: {
    outDir: "build", // Change Vite's output directory to 'build'
  },
});
