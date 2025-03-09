import { Link } from 'react-router'
import { ActorCardProps } from '../../../types'

function ActorCard({ id, name, photo, ref }: ActorCardProps) {
	return (
		<Link to={`/actor/${id}`}>
			<article ref={ref && ref} className={`group`}>
				<div className='actor-card relative transition-transform duration-300 ease-in-out group-hover:scale-110'>
					<img
						src={photo}
						className='h-full w-full rounded-2xl'
						alt='movie-image'
					/>
				</div>

				<div className='text-text-default-active mt-2 max-w-[100px] text-xl transition-all duration-300 ease-in-out group-hover:mt-6'>
					{name}
				</div>
			</article>
		</Link>
	)
}

export default ActorCard
