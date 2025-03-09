import { useParams } from 'react-router'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Description from '../components/sections/Description'
import { useGetMovieQuery } from '../services/movieApi'
import Loader from '../components/ui/loader/Loader'
import Hero from '../components/sections/Hero'
import ActorsSlider from '../components/sliders/cards_slider/ActorsSlider'
import MoviePromo from '../components/sections/promos/MoviePromo'

function Movie() {
	const { id } = useParams()

	const { data, isLoading, isError } = useGetMovieQuery({ movie_id: id })

	if (isLoading) return <Loader />
	if (isError) return <div>Error fetching movies</div>

	const actors = data.actors_info.map((item: any) => ({
		id: item.id,
		name: item.name,
		photo: item.photo,
	}))

	const fileId = data.actions[0].file_id

	return (
		<div className='w-full'>
			<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg h-screen'>
				<Header />
				<Hero
					id={Number(id)}
					fileId={fileId}
					name={data.name}
					type={data.seasons.length > 0 ? 'serial' : 'movie'}
					seasons={
						data.seasons.length > 0 ? data.seasons.length : data.duration
					}
					backgroundImage={data.ad_banner}
					kinopoiskRating={data.kinopoisk_rating}
					year={data.year}
					ageRating={data.rating}
					genre={data.genres}
					thumbnail={data.thumbnail_big}
					provider={data.provider}
					imdbRating={data.imdb_rating}
					isMoviePage={true}
					description={data.short_description}
				/>
			</div>
			<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg mt-6 mb-30'>
				<Description
					title={data.name}
					description={data.description}
					genres={data.genres}
					year={data.year}
					countries={data.countries}
					seasons={
						data.seasons.length > 0 ? data.seasons.length : data.duration
					}
					kinopoiskRating={data.kinopoisk_rating}
					ageRating={data.rating}
					imdbRating={data.imdb_rating}
					type={data.seasons.length > 0 ? 'serial' : 'movie'}
				/>
			</div>
			<ActorsSlider slider={actors} />
			<MoviePromo name={data.name} />
			<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg mt-20 max-lg:mt-12'>
				<Footer />
			</div>
		</div>
	)
}

export default Movie
