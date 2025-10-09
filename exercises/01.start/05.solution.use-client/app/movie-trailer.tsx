'use client'

import { Activity, useEffect, useState } from 'react'
import { type Movie } from '#app/movies-data.ts'

export function MovieTrailer({ movie }: { movie: Movie }) {
	const [showTrailer, setShowTrailer] = useState(false)
	useAutoplay(showTrailer)

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
						loop
						controls
					/>
				</div>
			</Activity>
		</div>
	)
}

function useAutoplay(showTrailer: boolean) {
	useEffect(() => {
		const video = document.querySelector('video')
		if (!(video instanceof HTMLVideoElement)) return
		if (!showTrailer) {
			void video.pause()
			return
		}

		video.volume = 1
		void video.play()
		return () => {
			void video.pause()
		}
	}, [showTrailer])
}
