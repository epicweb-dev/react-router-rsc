'use client'

import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { type Movie } from '#app/movies-data.ts'

// Client component for interactive trailer
export function MovieTrailer({ movie }: { movie: Movie }) {
	const [showTrailer, setShowTrailer] = React.useState(false)

	return (
		<div className="mb-6">
			<button
				onClick={() => setShowTrailer(!showTrailer)}
				className="rr-button mb-4"
			>
				{showTrailer ? 'Hide Trailer' : 'Watch Trailer'}
			</button>
			{showTrailer && (
				<div className="overflow-hidden rounded-lg">
					<LiteYouTubeEmbed
						id={movie.youtubeId}
						title={movie.title}
						params="autoplay=1&mute=0&rel=0&modestbranding=1"
						alwaysLoadIframe={true}
					/>
				</div>
			)}
		</div>
	)
}
