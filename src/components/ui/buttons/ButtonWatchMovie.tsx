import { Link } from 'react-router'

interface ButtonWatchMovieProps {
	id: number
	text: string
	style: string
}

function ButtonWatchMovie({ id, text, style }: ButtonWatchMovieProps) {
	return (
		<Link
			to={`/watch-movie/${id}`}
			className={`gradient-button primary-gradient ${style}`}
		>
			{text}
		</Link>
	)
}

export default ButtonWatchMovie
