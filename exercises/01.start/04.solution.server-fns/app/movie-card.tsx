import { href, Link } from 'react-router'
import { type Movie } from './movies-data.ts'

export function MovieCard({ movie }: { movie: Movie }) {
	return (
		<Link
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
	)
}
