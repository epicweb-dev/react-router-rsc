import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	index('routes/index.tsx'),
	route('/:movieId', 'routes/$movieId.tsx'),
] satisfies RouteConfig
