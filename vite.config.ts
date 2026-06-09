import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/e-commerce/",
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "api": "https://6a1f31efb79eec0d6cf09493.mockapi.io/exclusive/users"
    }
  }
});
