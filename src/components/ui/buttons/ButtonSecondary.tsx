import { CSSProperties, ReactElement } from 'react'

interface ButtonSecondaryProps {
	text: string
	icon: ReactElement
	style?: CSSProperties
	action?: () => void
}

function ButtonSecondary({ text, icon, action, style }: ButtonSecondaryProps) {
	return (
		<button
			className='hover-text flex cursor-pointer items-center gap-1 text-lg max-xl:text-base'
			onClick={action}
			style={style}
		>
			{icon}
			<span>{text}</span>
		</button>
	)
}

export default ButtonSecondary
