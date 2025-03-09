import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import HomePromo from '../components/sections/promos/HomePromo'
import MoviesSlider from '../components/sliders/cards_slider/MoviesSlider'
import HeroSlider from '../components/sliders/hero_slider/HeroSlider'
import Loader from '../components/ui/loader/Loader'
import { useGetMoviesQuery } from '../services/movieApi'

function Home() {
	const { data, isLoading, isError } = useGetMoviesQuery()

	if (isLoading) return <Loader />
	if (isError) return <div>Error fetching movies</div>

	const heroSliderData = data.contents.slice(0, 4).map((item: any) => ({
		id: item.video.id,
		name: item.video.name,
		backgroundImage: item.video.ad_banner,
		kinopoiskRating: item.video.kinopoisk_rating,
		ageRating: item.video.rating,
		year: item.video.year,
		thumbnail: item.video.thumbnail_big,
		provider: item.video.provider,
		imdbRating: item.video.imdb_rating,
		genre: item.video.genres,
	}))

	const moviesSliderData = data.contents.slice(4).map((item: any) => ({
		id: item.video.id,
		name: item.video.name,
		image: item.video.thumbnail_big,
		rating: item.video.imdb_rating,
		year: item.video.year,
		provider: item.video.provider,
	}))

	return (
		<div className='w-full'>
			<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg'>
				<Header />
				<HeroSlider slider={heroSliderData} />
			</div>

			<div className='mt-2'>
				<MoviesSlider
					slider={moviesSliderData}
					text='Популярно в кинозале'
					additionalText='Смотреть все'
				/>
			</div>
			<HomePromo />
			<MoviesSlider
				slider={moviesSliderData}
				text='Бесплатные фильмы'
				additionalText='Смотреть все'
			/>

			<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg mt-20 max-lg:mt-12'>
				<Footer />
			</div>
		</div>
	)
}

export default Home
