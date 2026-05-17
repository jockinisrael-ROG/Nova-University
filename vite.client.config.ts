import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Client-only SPA build for GitHub Pages
export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  base: "/Nova-University/",
  define: {
    "process.env.BASE_URL": JSON.stringify("/Nova-University/"),
  },
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/client.tsx",
    },
  },
});
