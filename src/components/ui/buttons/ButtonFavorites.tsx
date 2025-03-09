import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import useActions from '../../../hooks/useActions'
import { MovieCardProps } from '../../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

function ButtonFavorites({
	id,
	name,
	year,
	image,
	rating,
	provider,
}: MovieCardProps) {
	const [isFilled, setIsFilled] = useState<boolean>(false)
	const favorites = useSelector((state: RootState) => state.favorites.movie)
	const { addMovieToFavorites, removeMovieFromFavorites } = useActions()

	useEffect(() => {
		if (!favorites.some(movie => movie.id === id)) {
			setIsFilled(false)
		} else {
			setIsFilled(true)
		}
	}, [])

	const handleAddToFavorites = (event: React.MouseEvent) => {
		event.stopPropagation() // Останавливаем всплытие события
		event.preventDefault() // Предотвращаем переход по ссылке

		if (!favorites.some(movie => movie.id === id)) {
			setIsFilled(true)
			addMovieToFavorites({ id, name, year, image, rating, provider })
		} else {
			setIsFilled(false)
			removeMovieFromFavorites({ id })
		}
	}

	return (
		<button
			onClick={handleAddToFavorites}
			className='bg-blue text-text-default-active cursor-pointer rounded-full p-3 transition-all duration-300 ease-in-out max-lg:p-2'
		>
			<Star
				className='transition-all duration-300 ease-in-out max-lg:h-6 max-lg:w-6'
				fill={isFilled ? '#fff' : '#001c52'}
			/>
		</button>
	)
}

export default ButtonFavorites
