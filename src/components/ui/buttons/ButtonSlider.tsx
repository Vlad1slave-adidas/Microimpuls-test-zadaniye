import { ChevronRight } from 'lucide-react'

interface ButtonSlider {
	text: string
	additionalText: string
	action?: () => void
}

function ButtonSlider({ text, additionalText, action }: ButtonSlider) {
	return (
		<button
			className='px-px-default flex text-text-default-active items-center gap-4 cursor-pointer'
			onClick={action}
		>
			<div className='font-bold text-2xl '>{text}</div>

			<div className='flex items-center text-text-default text-xl font-light transition-all duration-250 ease-out -translate-x-full opacity-0 group-hover:text-text-default-active group-hover:opacity-100 group-hover:translate-x-0'>
				{additionalText}
				<ChevronRight width={20} height={20} />
			</div>
		</button>
	)
}

export default ButtonSlider
