import { Link } from 'react-router'
import { MovieCardProps } from '../../../types'
import ButtonFavorites from '../buttons/ButtonFavorites'

function MovieCard({
	id,
	name,
	year,
	image,
	rating,
	provider,
	ref,
}: MovieCardProps) {
	return (
		<Link to={`/movie/${id}`}>
			<article ref={ref && ref} className={`group`}>
				<div className='movie-card relative transition-transform duration-300 ease-in-out group-hover:scale-110'>
					<img
						src={image}
						className='h-full w-full rounded-2xl'
						alt='movie-image'
					/>
					<div
						className={`group-hover: absolute top-2 right-2 z-40 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-90 group-hover:opacity-100`}
					>
						<ButtonFavorites
							id={id}
							name={name}
							year={year}
							image={image}
							rating={rating}
							provider={provider}
						/>
					</div>
					<div className='text-text-default-active absolute bottom-2 left-1/2 flex w-[95%] -translate-x-1/2 justify-between'>
						<div className='bg-transparent-black rounded-lg px-2 text-[20px] font-bold transition-transform duration-300 ease-in-out group-hover:scale-90'>
							{Number(rating).toFixed(1)}
						</div>
						{provider && (
							<img
								src={
									provider === 'start'
										? '/icons/start.svg'
										: '/icons/premier.svg'
								}
								className='h-[30px] w-auto transition-transform duration-300 ease-in-out group-hover:scale-90'
							/>
						)}
					</div>
				</div>
				<div className='text-text-default-active mt-2 max-w-[230px] truncate text-xl transition-all duration-300 ease-in-out group-hover:mt-6 max-lg:text-[16px]'>
					{name}
				</div>
				<div className='text-text-info flex items-center gap-2 text-lg max-lg:text-[16px]'>
					<div>{year}, </div>
					<div>1 сезон</div>
				</div>
			</article>
		</Link>
	)
}

export default MovieCard
