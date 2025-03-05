import { Link } from 'react-router'
import { MovieCardProps } from '../../../types'

function MovieCard({
	id,
	name,
	year,
	image,
	rating,
	provider,
}: MovieCardProps) {
	return (
		<Link to={`/movie/${id}`}>
			<article className='m-6 transition-transform duration-300 hover:scale-105'>
				<div className='relative movie-card mb-2'>
					<img
						src={image}
						className='w-full h-full rounded-2xl '
						alt='movie-image'
					/>
					<div className='absolute bottom-0'>
						<div>{rating}</div>
						<div>{provider}</div>
					</div>
				</div>
				<div className='text-text-default-active text-xl max-w-[230px] truncate'>
					{name}
				</div>
				<div className='flex items-center gap-2 text-lg'>
					<div>{year}, </div>
					<div>1 сезон</div>
				</div>
			</article>
		</Link>
	)
}

export default MovieCard
