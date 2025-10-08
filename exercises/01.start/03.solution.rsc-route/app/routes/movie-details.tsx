import { ViewTransition } from 'react'
import { Form, href, Link } from 'react-router'
import { MovieTrailer } from '#app/movie-trailer.tsx'
import { getMovie, setIsFavorite } from '#app/movies-data.ts'
import { type Route } from './+types/movie-details'

export async function loader({ params }: Route.LoaderArgs) {
	const movie = await getMovie(Number(params.movieId))
	return { movie }
}

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData()
	await setIsFavorite(formData)
	return { success: true }
}

export default function MovieDetailsPage({ loaderData }: Route.ComponentProps) {
	const { movie } = loaderData

	return (
		<main className="bg-background min-h-screen">
			<title>{movie.title}</title>
			<meta name="description" content={movie.description} />
			<div className="mx-auto max-w-4xl px-6 py-16">
				<div className="mb-8">
					<nav className="rr-text mb-6 text-sm">
						<Link to={href('/')} className="rr-link">
							← Back to Movies
						</Link>
					</nav>
				</div>

				<div className="flex flex-col gap-6 md:flex-row">
					<div className="md:w-1/3">
						<ViewTransition name={`movie-poster-${movie.id}`}>
							<img
								src={movie.poster}
								alt={`${movie.title} poster`}
								className="h-96 w-full rounded-lg object-cover"
							/>
						</ViewTransition>
					</div>
					<div className="md:w-2/3">
						<ViewTransition name={`movie-title-${movie.id}`}>
							<h1 className="rr-heading mb-4 text-3xl font-bold">
								{movie.title}
							</h1>
						</ViewTransition>
						<div className="mb-4 flex items-center gap-4">
							<span className="rr-text text-lg">{movie.year}</span>
							<span className="rr-badge">Rating: {movie.rating}/10</span>
							<Form method="post">
								<input type="hidden" name="id" value={movie.id} />
								<input
									type="hidden"
									name="isFavorite"
									value={String(!movie.isFavorite)}
								/>
								<button
									type="submit"
									className={`rr-badge cursor-pointer ${movie.isFavorite ? 'rr-badge-red' : ''}`}
								>
									{movie.isFavorite ? 'Favorite' : 'Not Favorite'}
								</button>
							</Form>
						</div>
						<p className="rr-text mb-6">{movie.description}</p>
						<MovieTrailer movie={movie} />
					</div>
				</div>
			</div>
		</main>
	)
}
