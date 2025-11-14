import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  // Désactiver la génération de sourcemaps côté build/dev pour éviter les warnings
  build: {
    sourcemap: false,
  },
  css: {
    devSourcemap: false,
  },
  optimizeDeps: {
    // Demander à esbuild de ne pas générer de sourcemaps pour les dépendances pré-bundlées
    esbuildOptions: {
      // certains environnements/types ne déclarent pas ce champ, mais il est passé à esbuild
      sourcemap: false as unknown as boolean,
    },
  },
});
