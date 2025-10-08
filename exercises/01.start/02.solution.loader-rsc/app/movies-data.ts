export async function setIsFavorite(formData: FormData) {
	// Simulate API call delay
	await new Promise((resolve) => setTimeout(resolve, 50))

	const movieId = Number(formData.get('id'))
	const isFavorite = formData.get('isFavorite') === 'true'
	// Update the movie's favorite status
	const movie = movies.find((m) => m.id === movieId)
	if (movie) {
		movie.isFavorite = isFavorite
	}
}

// Mock data for demonstration
let movies = [
	{
		id: 1,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		year: 2001,
		isFavorite: false,
		poster: '/posters/lotr-fellowship-poster.jpg',
		videoUrl: '/videos/lotr-fellowship-trailer.mp4',
		description:
			'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
		rating: 8.8,
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Two Towers',
		year: 2002,
		isFavorite: true,
		poster: '/posters/lotr-two-towers-poster.jpg',
		videoUrl: '/videos/lotr-two-towers-trailer.mp4',
		description:
			"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
		rating: 8.7,
	},
	{
		id: 3,
		title: 'The Lord of the Rings: The Return of the King',
		year: 2003,
		isFavorite: false,
		poster: '/posters/lotr-return-king-poster.jpg',
		videoUrl: '/videos/lotr-return-king-trailer.mp4',
		description:
			"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom on their quest to destroy the One Ring.",
		rating: 8.9,
	},
	{
		id: 4,
		title: 'K-Pop Demon Hunters',
		year: 2025,
		isFavorite: true,
		poster: '/posters/kpop-demon-hunters-poster.jpg',
		videoUrl: '/videos/kpop-demon-hunters-trailer.mp4',
		description:
			'An animated musical comedy about a group of K-pop idols who moonlight as demon hunters, saving the world one catchy song at a time.',
		rating: 9.2,
	},
	{
		id: 5,
		title: 'Spider-Man: Into the Spider-Verse',
		year: 2018,
		isFavorite: false,
		poster: '/posters/spiderverse-into-poster.jpg',
		videoUrl: '/videos/spiderverse-into-trailer.mp4',
		description:
			'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
		rating: 8.4,
	},
	{
		id: 6,
		title: 'Spider-Man: Across the Spider-Verse',
		year: 2023,
		isFavorite: true,
		poster: '/posters/spiderverse-across-poster.jpg',
		videoUrl: '/videos/spiderverse-across-trailer.mp4',
		description:
			"After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
		rating: 8.6,
	},
]

export type Movie = (typeof movies)[number]

export async function getMovies() {
	// Simulate API call delay
	await new Promise((resolve) => setTimeout(resolve, 100))
	return movies
}

export async function getMovie(id: number) {
	// Simulate API call delay
	await new Promise((resolve) => setTimeout(resolve, 50))
	const movie = movies.find((m) => m.id === id)
	if (!movie) {
		throw new Response('Movie not found', { status: 404 })
	}
	return movie
}
