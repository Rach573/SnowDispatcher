import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
	build: {
		outDir: '.vite/preload',
		emptyOutDir: false,
		rollupOptions: {
			output: {
				// Ensure preload bundle is named `preload.js` instead of clashing with other entries
				entryFileNames: '[name].js',
			},
		},
	},
});
