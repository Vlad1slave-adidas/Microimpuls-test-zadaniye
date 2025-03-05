import { useParams } from 'react-router'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Description from '../components/sections/Description'
import { useGetMovieQuery } from '../services/movieApi'
import Loader from '../components/ui/loader/Loader'
import Hero from '../components/sections/Hero'
import ActorsSlider from '../components/sliders/cards_slider/ActorsSlider'
import MoviePromo from '../components/sections/promos/MoviePromo'
import VideoPlayer from '../components/video_player/VideoPlayer'

function Movie() {
	const params = useParams()
	const id = params.id

	const { data, isLoading, isError } = useGetMovieQuery({ movie_id: id })
	console.log('🚀 ~ Movie ~ data:', data)

	if (isLoading) return <Loader />
	if (isError) return <div>Error fetching movies</div>

	// const videoUrl = data?.actions?.find(
	// 	(a: any) => a.action === 'get_trailer_url'
	// )?.url

	const actors = data.actors_info.map((item: any) => ({
		id: item.id,
		name: item.name,
		photo: item.photo,
	}))

	return (
		<div className='w-full'>
			<div className='px-px-default h-screen'>
				<Header />
				<Hero
					id={Number(id)}
					name={data.name}
					backgroundImage={data.ad_banner}
					kinopoiskRating={data.kinopoisk_rating}
					year={data.year}
					genre={data.genres}
					isMoviePage={true}
					description={data.short_description}
				/>
			</div>
			<div className='mt-6 px-px-default mb-30'>
				<Description
					title={data.name}
					description={data.description}
					genres={data.genres}
					year={data.year}
					countries={data.countries}
					seasons={data.seasons[0].name}
					kinopoiskRating={data.kinopoisk_rating}
					ageRating={data.rating}
					imdbRating={data.imdb_rating}
				/>
			</div>
			<ActorsSlider slider={actors} />
			<VideoPlayer id={data.actions[0].url} />
			<MoviePromo name={data.name} />
			<div className='mt-20 px-px-default'>
				<Footer />
			</div>
		</div>
	)
}

export default Movie
