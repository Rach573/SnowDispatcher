import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				// Ensure preload bundle is named `preload.js` instead of clashing with other entries
				entryFileNames: '[name].js',
			},
		},
	},
});
