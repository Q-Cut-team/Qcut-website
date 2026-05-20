import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ['website-staging-production-d64a.up.railway.app','www.qcut.at', 'qcut.at']
  }
});
