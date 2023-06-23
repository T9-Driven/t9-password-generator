import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import "dotenv/config";

export default defineConfig({
  plugins: [
    react(),
  ],
});
