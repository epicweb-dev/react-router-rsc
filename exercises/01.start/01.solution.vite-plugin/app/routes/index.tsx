import { MovieCard } from '#app/movie-card.tsx'
import { getMovies } from '#app/movies-data.ts'
import { type Route } from './+types/index'

export async function loader() {
	const movies = await getMovies()
	return { movies }
}

export default function MoviesPage({ loaderData }: Route.ComponentProps) {
	const { movies } = loaderData

	const moviesUI = movies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	))

	return (
		<main className="bg-background min-h-screen">
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
