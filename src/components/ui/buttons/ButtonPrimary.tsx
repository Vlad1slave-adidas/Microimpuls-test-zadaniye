interface ButtonPrimaryProps {
	text: string
	style?: string
	action?: () => void
}

function ButtonPrimary({ text, action, style }: ButtonPrimaryProps) {
	return (
		<button
			onClick={action}
			className={`gradient-button primary-gradient ${style}`}
		>
			{text}
		</button>
	)
}

export default ButtonPrimary
