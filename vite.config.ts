import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build:{
		minify: false,
		commonjsOptions: {
			esmExternals: true
		}
	}
};

export default config;
