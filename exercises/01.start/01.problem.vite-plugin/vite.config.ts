// import { unstable_reactRouterRSC as reactRouterRSC } from '@react-router/dev/vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
// import rsc from '@vitejs/plugin-rsc'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: process.env.PORT ? Number(process.env.PORT) : undefined,
	},
	plugins: [
		tailwindcss(),
		tsconfigPaths(),
		// here we go...
		reactRouter(),
		devtoolsJson(),
	],
})
