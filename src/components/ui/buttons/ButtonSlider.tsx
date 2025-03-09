import { ChevronRight } from 'lucide-react'

interface ButtonSlider {
	text: string
	additionalText: string
	action?: () => void
}

function ButtonSlider({ text, additionalText, action }: ButtonSlider) {
	return (
		<button
			className='px-px-default max-xl:px-px-xl max-lg:px-px-lg text-text-default-active flex items-center gap-4'
			onClick={action}
		>
			<div className='flex items-center gap-1 text-2xl font-bold max-xl:text-xl'>
				{text}
				<ChevronRight
					width={20}
					height={20}
					className='text-text-default group-hover/section:hidden max-xl:h-[18px] max-xl:w-[18px]'
				/>
			</div>

			<div className='text-text-default group-hover/section:text-text-default-active flex -translate-x-full cursor-pointer items-center text-xl font-light opacity-0 transition-all duration-300 ease-out group-hover/section:translate-x-0 group-hover/section:opacity-100 max-xl:text-lg'>
				{additionalText}
				<ChevronRight width={20} height={20} />
			</div>
		</button>
	)
}

export default ButtonSlider
