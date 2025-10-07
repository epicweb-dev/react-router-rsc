import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	index('routes/index.tsx'),
	route('/:movieId', 'routes/movie-details.tsx'),
] satisfies RouteConfig
