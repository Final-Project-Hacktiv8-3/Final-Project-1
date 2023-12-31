import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@lib": "/src/lib",
      "@service": "/src/service",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
    },
  },
});
