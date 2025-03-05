import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

interface ButtonNavProps {
	text: string
	link: string
}

function ButtonNav({ text, link }: ButtonNavProps) {
	const location = useLocation()

	return (
		<Link
			className={clsx('text-lg hover-text', {
				'text-text-default-active': location.pathname === link,
			})}
			to={link}
		>
			{text}
		</Link>
	)
}

export default ButtonNav
