import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build:{
		minify: true,
		commonjsOptions: {
			esmExternals: true
		},
		rollupOptions:{
			external: ['chart.js']
		}
	}
};

export default config;
