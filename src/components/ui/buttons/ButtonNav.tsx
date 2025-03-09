import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

interface ButtonNavProps {
	text?: string
	icon?: React.ReactElement
	link: string
}

function ButtonNav({ text, link, icon }: ButtonNavProps) {
	const location = useLocation()

	return (
		<Link
			className={clsx(
				'hover-text flex items-center gap-1 text-lg max-xl:text-base',
				{
					'text-text-default-active': location.pathname === link,
				},
			)}
			to={link}
		>
			{icon}
			{text}
		</Link>
	)
}

export default ButtonNav
