import { ViewTransition } from 'react'
import { href, Link } from 'react-router'
import { type Movie } from './movies-data.ts'

export function MovieCard({ movie }: { movie: Movie }) {
	return (
		<Link
			to={href('/:movieId', { movieId: String(movie.id) })}
			className="rr-card transition-shadow hover:shadow-lg"
		>
			<div className="mb-4">
				<ViewTransition name={`movie-poster-${movie.id}`}>
					<img
						src={movie.poster}
						alt={`${movie.title} poster`}
						className="mb-4 h-64 w-full rounded-lg object-cover"
					/>
				</ViewTransition>
				<ViewTransition name={`movie-title-${movie.id}`}>
					<h3 className="rr-heading text-lg font-semibold">{movie.title}</h3>
				</ViewTransition>
				<p className="rr-text mb-2">Year: {movie.year}</p>
				<p className="rr-text mb-2">Rating: {movie.rating}/10</p>
				<p className="rr-text mb-4 text-sm text-gray-600">
					{movie.description}
				</p>
				<div
					className={`rr-badge inline-block ${movie.isFavorite ? 'rr-badge-red' : ''}`}
				>
					{movie.isFavorite ? 'Favorite' : 'Not Favorite'}
				</div>
			</div>
		</Link>
	)
}
