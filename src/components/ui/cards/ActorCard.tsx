import { Link } from 'react-router'
import { ActorCardProps } from '../../../types'

function ActorCard({ id, name, photo }: ActorCardProps) {
	return (
		<Link to={`/actor/${id}`}>
			<article className='m-6 transition-transform duration-300 hover:scale-105'>
				<img
					src={photo}
					className='w-full h-full rounded-2xl mb-2 actor-card'
					alt='actor-photo'
				/>
				<div className='text-text-default-active text-xl '>{name}</div>
			</article>
		</Link>
	)
}

export default ActorCard
