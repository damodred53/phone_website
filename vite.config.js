import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Spécifie l'algorithme de compression
      ext: '.br', // Extension de fichier pour les fichiers compressés
      verbose: true, // Afficher les informations détaillées sur la compression
    }),
  ],
  base: "/phone_website/", // Base URL de votre application
});