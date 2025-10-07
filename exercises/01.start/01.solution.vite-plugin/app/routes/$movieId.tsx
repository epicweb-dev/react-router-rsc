import { href, Link } from 'react-router'
import { getMovie } from '#app/movies-data.ts'
import { type Route } from './+types/$movieId'

export async function loader({ params }: Route.LoaderArgs) {
	const movie = await getMovie(Number(params.movieId))
	return { movie }
}

export function meta({ loaderData }: Route.MetaArgs) {
	return [
		{ title: `${loaderData.movie.title} - Demo 1` },
		{
			name: 'description',
			content: loaderData.movie.description,
		},
	]
}

export default function MovieDetailsPage({ loaderData }: Route.ComponentProps) {
	const { movie } = loaderData

	return (
		<main className="bg-background movie-details-page min-h-screen">
			<div className="mx-auto max-w-4xl px-6 py-16">
				<div className="mb-8">
					<nav className="rr-text mb-6 text-sm">
						<Link to={href('/')} className="rr-link">
							← Back to Movies
						</Link>
					</nav>
				</div>

				<div className="rr-card">
					<div className="flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/3">
							<img
								src={movie.poster}
								alt={`${movie.title} poster`}
								className="h-96 w-full rounded-lg object-cover"
							/>
						</div>
						<div className="md:w-2/3">
							<h1 className="rr-heading mb-4 text-3xl font-bold">
								{movie.title}
							</h1>
							<div className="mb-4 flex items-center gap-4">
								<span className="rr-text text-lg">{movie.year}</span>
								<span className="rr-badge">Rating: {movie.rating}/10</span>
								<span
									className={`rr-badge ${movie.isFavorite ? 'rr-badge-red' : ''}`}
								>
									{movie.isFavorite ? 'Favorite' : 'Not Favorite'}
								</span>
							</div>
							<p className="rr-text mb-6">{movie.description}</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
