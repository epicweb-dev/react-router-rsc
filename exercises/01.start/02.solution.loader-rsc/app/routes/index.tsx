import { href, Link } from 'react-router'
import { getMovies } from '#app/movies-data.ts'
import { type Route } from './+types/index'

export async function loader() {
	const movies = await getMovies()

	const moviesUI = movies.map((movie) => (
		<Link
			key={movie.id}
			to={href('/:movieId', { movieId: String(movie.id) })}
			className="rr-card transition-shadow hover:shadow-lg"
		>
			<div className="mb-4">
				<img
					src={movie.poster}
					alt={`${movie.title} poster`}
					className="mb-4 h-64 w-full rounded-lg object-cover"
				/>
				<h3 className="rr-heading text-lg font-semibold">{movie.title}</h3>
				<p className="rr-text mb-2">Year: {movie.year}</p>
				<p className="rr-text mb-2">Rating: {movie.rating}/10</p>
				<p className="rr-text mb-4 text-sm text-gray-600">
					{movie.description}
				</p>
				<div className="flex items-center gap-2">
					<span
						className={`rr-badge ${movie.isFavorite ? 'rr-badge-red' : ''}`}
					>
						{movie.isFavorite ? 'Favorite' : 'Not Favorite'}
					</span>
				</div>
			</div>
		</Link>
	))
	return { moviesUI }
}

export default function MoviesPage({ loaderData }: Route.ComponentProps) {
	const { moviesUI } = loaderData

	return (
		<main className="bg-background movies-page min-h-screen">
			<title>React Router RSC Movies</title>
			<meta
				name="description"
				content="Demo of React Server Components in React Router"
			/>
			<div className="mx-auto max-w-6xl px-6 py-16">
				<div className="mx-auto max-w-4xl">
					<h1 className="rr-heading mb-8 text-3xl font-bold">
						Movie Collection
					</h1>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{moviesUI}
					</div>
				</div>
			</div>
		</main>
	)
}
