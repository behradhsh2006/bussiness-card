import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // during local dev, `vercel dev` normally serves /api itself; if you
    // run plain `npm run dev` instead, this proxies /api/* to a local
    // Vercel dev server running on :3000 so the OCR button still works.
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
