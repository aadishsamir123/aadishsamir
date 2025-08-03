import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // SEO and Performance optimizations
  build: {
    // Generate source maps for better debugging
    sourcemap: false,

    // Optimize bundle size
    rollupOptions: {
      output: {
        // Better caching with content hashing
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",

        // Code splitting for better performance
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          routing: ["react-router-dom"],
          icons: ["react-icons"],
        },
      },
    },

    // Compress assets
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // Preview/dev server configuration
  server: {
    // Better development experience
    host: true,
    port: 5173,
  },

  // Preview configuration
  preview: {
    port: 4173,
    host: true,
  },
});
