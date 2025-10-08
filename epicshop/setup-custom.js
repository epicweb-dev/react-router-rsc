import path from 'node:path'
import { warm } from '@epic-web/workshop-cli/warm'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'
import fsExtra from 'fs-extra'

await warm()

const allApps = await getApps()
const problemApps = allApps.filter(isProblemApp)

// Copy posters and videos to each app's public directory
console.log('🎬 Copying posters and videos to all apps...')
const rootPublicPath = path.join(process.cwd(), 'public')
const postersSource = path.join(rootPublicPath, 'posters')
const videosSource = path.join(rootPublicPath, 'videos')

for (const app of allApps) {
	const appPublicPath = path.join(app.fullPath, 'public')
	if (await fsExtra.exists(appPublicPath)) {
		const postersTarget = path.join(appPublicPath, 'posters')
		const videosTarget = path.join(appPublicPath, 'videos')

		await fsExtra.copy(postersSource, postersTarget, { overwrite: true })
		await fsExtra.copy(videosSource, videosTarget, { overwrite: true })
	}
}

console.log('✅ Posters and videos copied to all apps')

if (!process.env.SKIP_PLAYGROUND) {
	const firstProblemApp = problemApps[0]
	if (firstProblemApp) {
		console.log('🛝  setting up the first problem app...')
		const playgroundPath = path.join(process.cwd(), 'playground')
		if (await fsExtra.exists(playgroundPath)) {
			console.log('🗑  deleting existing playground app')
			await fsExtra.remove(playgroundPath)
		}
		await setPlayground(firstProblemApp.fullPath).then(
			() => {
				console.log('✅ first problem app set up')
			},
			(error) => {
				console.error(error)
				throw new Error('❌  first problem app setup failed')
			},
		)
	}
}
