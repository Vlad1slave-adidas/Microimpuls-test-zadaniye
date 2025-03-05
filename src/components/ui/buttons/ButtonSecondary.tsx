import { ReactElement } from 'react'

interface ButtonSecondaryProps {
	text: string
	icon: ReactElement
	action?: () => void
}

function ButtonSecondary({ text, icon, action }: ButtonSecondaryProps) {
	return (
		<button
			className='flex items-center gap-1 text-lg hover-text cursor-pointer'
			onClick={action}
		>
			{/* <img
				className='fill-text-default'
				src={icon}
				alt='icon'
				width={22}
				height={22}
			/> */}
			{icon}
			<span>{text}</span>
		</button>
	)
}

export default ButtonSecondary
