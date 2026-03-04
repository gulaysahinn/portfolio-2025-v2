import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizasyonları
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Production'da console.log'ları kaldır
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Büyük kütüphaneleri ayrı chunk'lara ayır
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Chunk boyut uyarı limiti
    chunkSizeWarningLimit: 1000,
  },
});
