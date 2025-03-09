import { Link } from 'react-router'

interface ButtonWatchMovieProps {
	text: string
	style: string
	link: string
}

function ButtonWatchMovie({ text, style, link }: ButtonWatchMovieProps) {
	return (
		<Link to={link} className={`gradient-button primary-gradient ${style}`}>
			{text}
		</Link>
	)
}

export default ButtonWatchMovie
