import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import HeroPromo from '../components/sections/promos/HeroPromo'
import MoviesSlider from '../components/sliders/cards_slider/MoviesSlider'
import CardsSlider from '../components/sliders/cards_slider/MoviesSlider'
import HeroSlider from '../components/sliders/hero_slider/HeroSlider'
import Loader from '../components/ui/loader/Loader'
import { useGetMoviesQuery } from '../services/movieApi'

function Home() {
	const { data, isLoading, isError } = useGetMoviesQuery()
	console.log('🚀 ~ Home ~ data:', data)

	if (isLoading) return <Loader />
	if (isError) return <div>Error fetching movies</div>

	const heroSliderData = data.contents.slice(0, 4).map((item: any) => ({
		id: item.video.id,
		name: item.video.name,
		backgroundImage: item.video.ad_banner,
		kinopoiskRating: item.video.kinopoisk_rating,
		year: item.video.year,
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
			<div className='px-px-default'>
				<Header />
				<HeroSlider slider={heroSliderData} />
			</div>
			<div className='mt-6 mb-2'>
				<CardsSlider
					slider={moviesSliderData}
					text='Популярно в кинозале'
					additionalText='Смотреть все'
				/>
			</div>
			<HeroPromo />
			<MoviesSlider
				slider={moviesSliderData}
				text='Бесплатные фильмы'
				additionalText='Смотреть все'
			/>
			<div className='mt-20 px-px-default'>
				<Footer />
			</div>
		</div>
	)
}

export default Home
