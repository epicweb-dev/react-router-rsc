'use client'

import { Activity, useState } from 'react'
import { type Movie } from '#app/movies-data.ts'

export function MovieTrailer({ movie }: { movie: Movie }) {
	const [showTrailer, setShowTrailer] = useState(false)

	return (
		<div className="mb-6">
			<button
				onClick={() => setShowTrailer(!showTrailer)}
				className="rr-button mb-4"
			>
				{showTrailer ? 'Hide Trailer' : 'Watch Trailer'}
			</button>
			<Activity mode={showTrailer ? 'visible' : 'hidden'}>
				<div className="overflow-hidden rounded-lg">
					<video
						src={movie.videoUrl}
						title={movie.title}
						autoPlay
						muted
						loop
						controls
					/>
				</div>
			</Activity>
		</div>
	)
}
