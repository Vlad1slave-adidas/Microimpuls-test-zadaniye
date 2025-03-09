import { useSelector } from 'react-redux'
import Header from '../components/layouts/Header'
import { RootState } from '../store/store'
import MovieCard from '../components/ui/cards/MovieCard'

function Favorites() {
	const movies = useSelector((state: RootState) => state.favorites.movie)

	return (
		<div className='px-px-default max-xl:px-px-xl max-lg:px-px-lg w-full'>
			<Header />

			<section className='mt-4'>
				<h1 className='text-text-default-active mb-6 text-4xl font-bold max-xl:text-[32px] max-lg:text-[28px]'>
					Избранное
				</h1>
				<div className='movie-card max-xs:grid-cols-2 grid w-full auto-rows-[450px] grid-cols-5 justify-between max-[830px]:!auto-rows-[330px] max-[830px]:!grid-cols-3 max-xl:auto-rows-[390px] max-xl:grid-cols-4 max-lg:auto-rows-[340px] max-lg:grid-cols-4'>
					{movies.map(item => (
						<MovieCard
							key={item.id}
							id={item.id}
							name={item.name}
							image={item.image}
							rating={item.rating}
							year={item.year}
							provider={item.provider}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default Favorites
