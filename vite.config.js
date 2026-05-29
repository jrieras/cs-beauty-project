import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cs-beauty-project/",
  plugins: [react()],
});
